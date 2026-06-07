interface TextProps {
    children: string
    className?: string
}

const Text = ({children, className}: TextProps) => {
    return (
        <div className={`text-justify tracking-widest text-3xl leading-normal ${className}`}>
            {children}
        </div>
    );
};

export default Text;