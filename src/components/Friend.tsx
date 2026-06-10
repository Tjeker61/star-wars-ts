import {characters, navItems} from "../utils/constants.ts";
import {Link} from "react-router";

interface FriendProps {
    friend: string;
    alt: string;
}

const Friend = ({friend, alt}: FriendProps) => {
    let classNameValue = "w-full";

    if (alt === 'friend7') classNameValue += " rounded-bl-3xl";
    if (alt === 'friend9') classNameValue += " rounded-br-3xl";

    return (
        <Link to={`/${navItems[0].toLowerCase()}/${friend}`}>
        <img className={classNameValue} src={characters[friend].img} alt={alt}/>
        </Link>
    );
};

export default Friend;