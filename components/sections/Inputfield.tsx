import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { inputProps } from "@/types/types";

export const Inputfield = ({ label, type, id, placeholder }: inputProps) => {
    return (
        <div className="grid w-full items-center gap-3">
            <Label htmlFor={`${id}`}>{label}</Label>
            <Input placeholder={placeholder} type={type} id={`${id}`} />
        </div>
    );
};

export default Inputfield;
