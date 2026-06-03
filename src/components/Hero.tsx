import main from '../images/main.jpg'

const Hero = () => {
    return (
        <section className="float-left w-1/4 mt-2 mr-4">
            <img className="w-full shadow-hero" src={main} alt="Luke Skywalker"/>
        </section>
    );
};

export default Hero;