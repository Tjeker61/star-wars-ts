import Button from "./ui/Button.tsx";
import {NavLink} from "react-router";

interface NavItemProps {
    itemTitle: string;
}

const NavItem = ({itemTitle}: NavItemProps) => {


    return (
        <NavLink to={`/${itemTitle.toLowerCase()}`} className={({isActive}) => isActive ? "bg-red-500 text-white rounded-md" : ""}>
        <Button
              className="bg-danger rounded-md px-3 cursor-pointer hover:bg-red-500 hover:text-white">{itemTitle}
        </Button>
        </NavLink>

    );
};

export default NavItem;