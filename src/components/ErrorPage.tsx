import Text from "./ui/Text.tsx";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";

const ErrorPage = () => {
    const { setIsErrorPage } = useContext(SWContext);

    useEffect(() => {
        setIsErrorPage(true);
        return () => setIsErrorPage(false);
    }, []);

    return (
        <div>
            <Text className={'text-center!'}>Error 404</Text>
        </div>
    );
};

export default ErrorPage;