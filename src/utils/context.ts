import {createContext} from "react";
import {defaultHero} from "./constants.ts";
import type {SWContextValue} from "./type";

export const SWContext = createContext<SWContextValue>({
    hero: defaultHero,
    changeHero: (hero: string) => {
        console.log(hero)},
    isErrorPage: false,
    setIsErrorPage: (isErrorPage: boolean) => {
        console.log(isErrorPage)},
});