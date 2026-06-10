import {starWarsInfo} from "../utils/constants.ts";
import Text from "./ui/Text.tsx";
import {useValidHero} from "./hooks/customHooks.ts";
import ErrorPage from "./ErrorPage.tsx";

const StarWars = () => {
    const {isHeroValid} = useValidHero()

    return isHeroValid ? (
        <Text>
            {starWarsInfo}
        </Text>
    ) : <ErrorPage />
};

export default StarWars;