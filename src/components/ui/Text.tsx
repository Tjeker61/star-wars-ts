interface TextProps {
    children: string
}

const Text = ({children}: TextProps) => {
    return (
        <div className={"text-justify tracking-widest text-3xl leading-normal"}>
            {children}
        </div>
    );
};

export default Text;