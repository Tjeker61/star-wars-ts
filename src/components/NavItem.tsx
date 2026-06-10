import Button from "./ui/Button.tsx";
import {NavLink} from "react-router";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";

interface NavItemProps {
    itemTitle: string;
}

const NavItem = ({itemTitle}: NavItemProps) => {
    const {hero} = useContext(SWContext);

    return (
        <NavLink to={`/${itemTitle.toLowerCase()}/${hero}`} className={({isActive}) => isActive ? "bg-red-500 text-white rounded-md" : ""}>
        <Button
              className="bg-danger rounded-md px-3 cursor-pointer hover:bg-red-500 hover:text-white">{itemTitle}
        </Button>
        </NavLink>

    );
};

export default NavItem;