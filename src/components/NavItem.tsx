import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import Button from "./ui/Button.tsx";

interface NavItemProps {
    itemTitle: string;
}

const NavItem = ({itemTitle}: NavItemProps) => {
    const {changePage} = useContext(SWContext)

    return (
        <Button  callback={() => changePage(itemTitle)}
              className="bg-danger rounded-md px-3 cursor-pointer hover:bg-red-500 hover:text-white">{itemTitle}
        </Button>
    );
};

export default NavItem;