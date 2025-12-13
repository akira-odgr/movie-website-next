import { titleProps } from "@/types/types";
import React from "react";

export const Title = ({ title, text }: titleProps) => {
    return (
        <div className="space-y-2">
            <h2 className="title">{title}</h2>
            <p className="max-w-3xl">{text}</p>
        </div>
    );
};

export default Title;
