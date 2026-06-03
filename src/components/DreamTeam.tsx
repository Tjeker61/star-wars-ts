import {friends} from "../utils/constants.ts";
import Friend from "./Friend.tsx";

const DreamTeam = () => {
    return (
        <section className="float-right w-1/2 border rounded-b-3xl grid grid-cols-3 gap-1.5 mt-2 ml-2">
            <h2 className="text-center col-span-3 text-2xl">Dream Team</h2>
            {friends.map((friendJpg, index) => <Friend key={index} src={friendJpg} alt={`friend${index+1}`}/>)}
        </section>
    );
};

export default DreamTeam;