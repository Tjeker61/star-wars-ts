import {useContext, useEffect, useState} from "react";
import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router";
import ErrorPage from "./ErrorPage.tsx";
import Text from "./ui/Text.tsx";
import {SWContext} from "../utils/context.ts";

interface heroInfo {
    Name?: string;
    Gender?: string;
    Height?: string;
    'Eye Color'?: string;
    'Birth Year'?: string;
    Error?: string;
}

const AboutMe = () => {
    const {changeHero} = useContext(SWContext)
    const {heroId = defaultHero} = useParams();
    const [heroInfo, setHeroInfo] = useState<heroInfo>(() => {
        const hero = JSON.parse(localStorage.getItem(heroId)!);
        if (hero && Date.now() - hero.timestamp < 1000 * 60 * 60 * 24 * 30) {
            return hero.payload;
        }
    })

    useEffect(() => {
        if (!(heroId in characters)) return;
        changeHero(heroId);
        if (!heroInfo) {
            fetch(characters[heroId as keyof typeof characters].url)
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
                    localStorage.setItem(heroId, JSON.stringify(
                        {
                            payload: info,
                            timestamp: Date.now(),
                        }
                    ))
                })
                .catch(() => setHeroInfo({Error: 'Data loading error'}))
        }
    }, []);

    if (!(heroId in characters)) return (<ErrorPage />)

    if (heroInfo) {
    return (
        <div>
            <img className="w-1/5 shadow-hero float-start m-4" src={characters[heroId as keyof typeof characters].img} alt={heroId}/>
        <p className="text-justify tracking-widest text-3xl leading-normal">
            {Object.entries(heroInfo).map(([key, value]) => <span key={key}>{key}: {value}<br/></span>)}
        </p>
        </div>
    );
    } else {
        return (
            <Text>
                Loading...
            </Text>
        )
    }
};

export default AboutMe;