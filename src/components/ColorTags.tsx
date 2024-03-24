import type { Values } from "@/types/TypeUnion";
import type { ReactNode } from "react";

export const Colors = {
    AMBER: "AMBER",
    BLUE: "BLUE",
    CYAN: "CYAN",
    EMERALD: "EMERALD",
    FUCHSIA: "FUCHSIA",
    GRAY: "GRAY",
    GREEN: "GREEN",
    INDIGO: "INDIGO",
    LIME: "LIME",
    NEUTRAL: "NEUTRAL",
    ORANGE: "ORANGE",
    PINK: "PINK",
    PURPLE: "PURPLE",
    RED: "RED",
    SLATE: "SLATE",
    STONE: "STONE",
    TEAL: "TEAL",
    VIOLET: "VIOLET",
    YELLOW: "YELLOW",
    ZINC: "ZINC"
} as const;

const tailwindColorMap = {
    [Colors.AMBER]: "bg-amber-400 text-amber-900",
    [Colors.BLUE]: "bg-blue-400 text-blue-900",
    [Colors.CYAN]: "bg-cyan-400 text-cyan-900",
    [Colors.EMERALD]: "bg-emerald-400 text-emerald-900",
    [Colors.FUCHSIA]: "bg-fuchsia-400 text-fuchsia-900",
    [Colors.GRAY]: "bg-gray-400 text-gray-900",
    [Colors.GREEN]: "bg-green-400 text-green-900",
    [Colors.INDIGO]: "bg-indigo-400 text-indigo-900",
    [Colors.LIME]: "bg-lime-400 text-lime-900",
    [Colors.NEUTRAL]: "bg-neutral-400 text-neutral-900",
    [Colors.ORANGE]: "bg-orange-400 text-orange-900",
    [Colors.PINK]: "bg-pink-400 text-pink-900",
    [Colors.PURPLE]: "bg-purple-400 text-purple-900",
    [Colors.RED]: "bg-red-400 text-red-900",
    [Colors.SLATE]: "bg-slate-400 text-slate-900",
    [Colors.STONE]: "bg-stone-400 text-stone-900",
    [Colors.TEAL]: "bg-teal-400 text-teal-900",
    [Colors.VIOLET]: "bg-violet-400 text-violet-900",
    [Colors.YELLOW]: "bg-yellow-400 text-yellow-900",
    [Colors.ZINC]: "bg-zinc-400 text-zinc-900",
};

interface IColorTagsProps {
    color: Values<typeof Colors>,
    children: ReactNode;
};

export default function ColorTags({ color, children }: IColorTagsProps) {
    return (
        <div className={"rounded-md px-2 py-1 text-sm font-semibold " + tailwindColorMap[color]}>
            {children}
        </div>

    );
};