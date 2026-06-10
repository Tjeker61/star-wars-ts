import {useEffect, useState} from "react";
import {BASE_URL} from "../utils/constants.ts";
import {useValidHero} from "./hooks/customHooks.ts";
import ErrorPage from "./ErrorPage.tsx";

const Contact = () => {
    const [planetsList, setPlanetsList] = useState<string[]>(() => {
        const planets = JSON.parse(localStorage.getItem("planets")!);
        if (planets && Date.now() - planets.timestamp < 1000 * 60 * 60 * 24 * 30) {
            return planets.payload;
        }
    })

    const {isHeroValid} = useValidHero()

    useEffect(() => {
        if (!planetsList) {
            fetch(`${BASE_URL}/v1/planets`)
                .then(res => res.json())
                .then((data: {name: string}[]) => {
                    const payload = data.map(planet => planet.name)
                    setPlanetsList(payload)
                    localStorage.setItem("planets", JSON.stringify(
                        {
                            payload,
                            timestamp: Date.now(),
                        }
                    ))
                })
        }
    }, []);

    if (!isHeroValid) return <ErrorPage />

    if (planetsList) {
        return (
            <div className={'p-5 border-5 bg-white w-10/12 mx-auto'}>
                <form className={''}>
                    <div>
                        <label className={'w-full text-danger'} htmlFor="fname">First Name</label>
                        <input className={'w-full p-3 border border-gray-700 rounded-sm box-border mt-1.5 mb-4'} type="text" id="fname" name="firstname" placeholder="Your name.."/>
                    </div>

                    <div>
                        <label className={'w-full text-danger'} htmlFor="lname">Last Name</label>
                        <input className={'w-full p-3 border border-gray-700 rounded-sm box-border mt-1.5 mb-4'} type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                    </div>

                    <div>
                        <label className={'w-full text-danger'} htmlFor="planet">Planet</label>
                        <select className={'w-full p-3 border border-gray-700 rounded-sm box-border mt-1.5 mb-4'} id="planet" name="planet">
                            {planetsList.map(planet => <option value={planet}>{planet}</option>)}
                        </select>
                    </div>

                    <div>
                        <label className={'w-full text-danger'} htmlFor="subject">Subject</label>
                        <textarea className={'w-full h-50 p-3 border border-gray-700 rounded-sm box-border mt-1.5 mb-4 resize-y'} id="subject" name="subject" placeholder="Write something.."></textarea>
                    </div>

                    <input className={'bg-submit text-white px-3 py-5 border-none rounded-sm cursor-pointer hover:bg-submit-hover'} type="submit" value="Submit" disabled/>

                </form>
            </div>
        );
    } else {
        return (
            <p className="text-justify tracking-widest text-3xl leading-normal">
                Loading...
            </p>
        )
    }
};

export default Contact;