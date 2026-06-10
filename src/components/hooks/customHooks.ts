import {useParams} from "react-router";
import {useContext, useEffect} from "react";
import {SWContext} from "../../utils/context.ts";
import {characters, defaultHero} from "../../utils/constants.ts";


export const useValidHero = () => {
    const {heroId = defaultHero} = useParams()
    const {changeHero} = useContext(SWContext)

    useEffect(() => {
        if (!(heroId in characters)) return;
        changeHero(heroId)
    }, [heroId]);

return {
    heroId,
    isHeroValid: heroId in characters,
}
}