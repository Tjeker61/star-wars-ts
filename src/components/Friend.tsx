import {characters} from "../utils/constants.ts";

interface FriendProps {
    friend: string;
    alt: string;
}

const Friend = ({friend, alt}: FriendProps) => {
    let classNameValue = "w-full";

    if (alt === 'friend7') classNameValue += " rounded-bl-3xl";
    if (alt === 'friend9') classNameValue += " rounded-br-3xl";

    return (
        <img className={classNameValue} src={characters[friend].img} alt={alt}/>
    );
};

export default Friend;