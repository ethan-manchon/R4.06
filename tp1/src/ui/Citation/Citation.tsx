import React from "react";

interface CitationProps {
    children?: string;
    className?: string;
}

export default function Citation(props : CitationProps) {
    if (props.children === undefined || props.children === "") {
        return null;
    }

    return (
        <p className={`text-left text-gray-700 ${props.className}`}>{props.children}</p>
    );
}