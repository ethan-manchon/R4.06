import React from "react";

interface EmailProps {
    children?: string;
    className?: string;
}

function checkEmail(email: string): boolean {
    // eslint-disable-next-line
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;    return emailRegex.test(email);
}

export default function Email(props : EmailProps) {
    if (props.children === undefined || props.children === "") {
        return null;
    }
    if (checkEmail(props.children) === false) {
        <p className={`text-red-600 text-left hover:underline ${props.className}`}>{props.children}</p>
    }
    return (
        <p className={`text-emerald-400 text-left hover:underline ${props.className}`}>{props.children}</p>
    );
}