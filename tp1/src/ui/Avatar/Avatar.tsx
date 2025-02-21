import React from "react";

interface AvatarProps {
    src: string;
    alt: string;
    className?: string;    
}

export default function Avatar(props : AvatarProps) {

    const defaultAvatar = "/assets/pdp/undefined.webp";

    if (props.src === '' || props.src === undefined) {
        return <img src={defaultAvatar} alt={props.alt} className={`Logo w-full rounded-2xl ${props.className}`} />;
    }

    return (
            <img src={props.src} alt={props.alt} className={`Logo w-full rounded-2xl ${props.className}`} />
    );
}