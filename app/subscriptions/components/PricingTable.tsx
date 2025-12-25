"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { tableItems } from "@/data/data";
import { motion } from "framer-motion";
import * as variants from "@/motion/animation";

export const PricingTable = () => {
    return (
        <motion.div variants={variants.fadeIn}>
            <Table className="border">
                <TableHeader>
                    <TableRow className="bg-black-06 divide-x">
                        {["Features", "Basic", "Standard", "Premium"].map(
                            (label, index) => (
                                <TableHead key={index}>
                                    <div className="flex items-center gap-2">
                                        <p>{label}</p>
                                        {label === "Standard" && (
                                            <span className="bg-red-50 p-1.5 rounded-xs text-sm">
                                                Popular
                                            </span>
                                        )}
                                    </div>
                                </TableHead>
                            )
                        )}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tableItems.map((item) => (
                        <TableRow key={item.id} className="divide-x">
                            <TableCell className="font-medium">
                                {item.Features}
                            </TableCell>
                            <TableCell>{item.Basic}</TableCell>
                            <TableCell>{item.Standard}</TableCell>
                            <TableCell>{item.Premium}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </motion.div>
    );
};

export default PricingTable;
