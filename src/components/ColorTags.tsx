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
    [Colors.AMBER]: "bg-amber-200 text-amber-900",
    [Colors.BLUE]: "bg-blue-200 text-blue-900",
    [Colors.CYAN]: "bg-cyan-200 text-cyan-900",
    [Colors.EMERALD]: "bg-emerald-200 text-emerald-900",
    [Colors.FUCHSIA]: "bg-fuchsia-200 text-fuchsia-900",
    [Colors.GRAY]: "bg-gray-200 text-gray-900",
    [Colors.GREEN]: "bg-green-200 text-green-900",
    [Colors.INDIGO]: "bg-indigo-200 text-indigo-900",
    [Colors.LIME]: "bg-lime-200 text-lime-900",
    [Colors.NEUTRAL]: "bg-neutral-200 text-neutral-900",
    [Colors.ORANGE]: "bg-orange-200 text-orange-900",
    [Colors.PINK]: "bg-pink-200 text-pink-900",
    [Colors.PURPLE]: "bg-purple-200 text-purple-900",
    [Colors.RED]: "bg-red-200 text-red-900",
    [Colors.SLATE]: "bg-slate-200 text-slate-900",
    [Colors.STONE]: "bg-stone-200 text-stone-900",
    [Colors.TEAL]: "bg-teal-200 text-teal-900",
    [Colors.VIOLET]: "bg-violet-200 text-violet-900",
    [Colors.YELLOW]: "bg-yellow-200 text-yellow-900",
    [Colors.ZINC]: "bg-zinc-200 text-zinc-900",
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