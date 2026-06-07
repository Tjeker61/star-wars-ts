
import Home from "./Home.tsx";
import {navItems} from "../utils/constants.ts";
import AboutMe from "./AboutMe.tsx";
import StarWars from "./StarWars.tsx";
import Contact from "./Contact.tsx";
import {Route, Routes} from "react-router";
import ErrorPage from "./ErrorPage.tsx";


const Main = () => {

    return (
        <Routes>
            {[`/`, `/${navItems[0]}`].map(p => <Route path={p} element={<Home />} />)}
            {/*<Route path={`/`} element={<Home />} />*/}
            {/*<Route path={`/${navItems[0]}`} element={<Home />} />*/}
            {[`/${navItems[1]}`, `/${navItems[1]}/:heroId`].map(p => <Route path={p} element={<AboutMe />} />)}
            {/*<Route path={`/${navItems[1]}/:heroId`} element={<AboutMe />} />*/}
            <Route path={`/${navItems[2]}`} element={<StarWars />} />
            <Route path={`/${navItems[3]}`} element={<Contact />} />
            <Route path={'*'} element={<ErrorPage />} />
        </Routes>
    )
};

export default Main;