import Card from "../Card/Card";
import { useState } from 'react';

interface MemberProps {
    firstname: string;
    lastname: string;
    mail?: string;
    desc: string;
    picture?: string;
    socials: {name: string, url: string}[];
}

interface TeamProps {
    title: string;
    description: string;
    members: MemberProps[];
}

export default function Team(team : TeamProps) {

    const [index, setIndex] = useState(0);
    const length = team.members.length - 1;
    const hasNext = index < length;
    const hasBefore = index > 0;

    function handleNextClick() {
        if (hasNext) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }
    function handleBeforeClick() {
        if (hasBefore) {
            setIndex(index - 1);
        } else {
            setIndex(length);
        }
    }

    let member = team.members[index];

    return (
        <div className="team align-items">
            <h3 className="team__title">{team.title}</h3>
            <p className="team__description">{team.description}</p>
            <div className="team__members grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                <button className="text-red-500" onClick={handleNextClick}> Next ▲ </button>
                <Card {...member} />
                <button className="text-red-500"  onClick={handleBeforeClick}> Before ▼ </button>
            </div>
            <p>({index + 1} of {team.members.length})</p>
        </div>
    )
}





