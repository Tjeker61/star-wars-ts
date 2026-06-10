import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import OpeningCrawl from "./OpeningCrawl.tsx";
import ErrorPage from "./ErrorPage.tsx";
import {useValidHero} from "./hooks/customHooks.ts";

const Home = () => {
    const {isHeroValid} = useValidHero()

    if (!isHeroValid) return (<ErrorPage />)

    return (
        <main className="">
            <Hero />
            <DreamTeam />
            <OpeningCrawl />
        </main>
    );
};

export default Home;