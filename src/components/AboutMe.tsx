import {useEffect, useState} from "react";
import {characters} from "../utils/constants.ts";
import ErrorPage from "./ErrorPage.tsx";
import Text from "./ui/Text.tsx";
import {useValidHero} from "./hooks/customHooks.ts";

interface heroInfo {
    Name?: string;
    Gender?: string;
    Height?: string;
    'Eye Color'?: string;
    'Birth Year'?: string;
    Error?: string;
}

const AboutMe = () => {
    const {isHeroValid, heroId} = useValidHero()
    
    const [heroInfo, setHeroInfo] = useState<heroInfo>(() => {
        const hero = JSON.parse(localStorage.getItem(heroId)!);
        if (hero && Date.now() - hero.timestamp < 1000 * 60 * 60 * 24 * 30) {
            return hero.payload;
        }
    })

    

    useEffect(() => {
        if (!isHeroValid) return;
        
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
    }, [heroId, heroInfo, isHeroValid]);

    if (!isHeroValid) return (<ErrorPage />)

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