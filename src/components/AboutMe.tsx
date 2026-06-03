import {useEffect, useState} from "react";
import {BASE_URL} from "../utils/constants.ts";
import main from "../images/main.jpg";

interface heroInfo {
    Name?: string;
    Gender?: string;
    Height?: string;
    'Eye Color'?: string;
    'Birth Year'?: string;
    Error?: string;
}

const AboutMe = () => {
    const [heroInfo, setHeroInfo] = useState<heroInfo>(() => {
        const hero = JSON.parse(localStorage.getItem("hero")!);
        if (hero && Date.now() - hero.timestamp < 1000 * 60 * 60 * 24 * 30) {
            return hero.payload;
        }
    })

    useEffect(() => {
        if (!heroInfo) {
            fetch(`${BASE_URL}/v1/peoples/1`)
                .then(res => res.json())
                .then(data => {
                    const info = {
                        'Name': data.name,
                        'Gender': data.gender,
                        'Height': data.height,
                        'Eye Color': data.eye_color,
                        'Birth Year': data.birth_year
                    }
                    setHeroInfo(info)
                    localStorage.setItem('hero', JSON.stringify(
                        {
                            payload: info,
                            timestamp: Date.now(),
                        }
                    ))
                })
                .catch(() => setHeroInfo({Error: 'Data loading error'}))
        }
    }, []);

    if (heroInfo) {
    return (
        <div>
            <img className="w-1/5 shadow-hero float-start m-4" src={main} alt="Luke Skywalker"/>
        <p className="text-justify tracking-widest text-3xl leading-normal">
            {Object.entries(heroInfo).map(([key, value]) => <span key={key}>{key}: {value}<br/></span>)}
        </p>
        </div>
    );
    } else {
        return (
            <p className="text-justify tracking-widest text-3xl leading-normal">
                Loading...
            </p>
        )
    }
};

export default AboutMe;