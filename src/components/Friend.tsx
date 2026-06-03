interface FriendProps {
    src: string;
    alt: string;
}

const Friend = ({src, alt}: FriendProps) => {
    let classNameValue = "w-full";

    if (alt === 'friend7') classNameValue += " rounded-bl-3xl";
    if (alt === 'friend9') classNameValue += " rounded-br-3xl";

    return (
        <img className={classNameValue} src={src} alt={alt}/>
    );
};

export default Friend;