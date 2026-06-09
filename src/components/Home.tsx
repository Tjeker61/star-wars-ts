import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import OpeningCrawl from "./OpeningCrawl.tsx";
import {useParams} from "react-router";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import {characters} from "../utils/constants.ts";
import ErrorPage from "./ErrorPage.tsx";

const Home = () => {
    const {heroId} = useParams()
    const {hero, changeHero} = useContext(SWContext)

    useEffect(() => {
        if (!heroId || !(heroId in characters)) return;
        if (heroId !== hero) changeHero(heroId)
    }, []);

    if (heroId && !(heroId in characters)) return (<ErrorPage />)

    return (
        <main className="">
            <Hero />
            <DreamTeam />
            <OpeningCrawl />
        </main>
    );
};

export default Home;