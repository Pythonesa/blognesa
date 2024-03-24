import type { ReactNode } from "react";

interface IProjectProps {
    img: {
        src: string;
        alt: string;
    };
    name: string;
    description: string;
    link: string;
    category: ReactNode;
};

export default function Project({ img, name, description, link, category }: IProjectProps) {
    return (
        <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-2 md:flex-row">
            <div className="shrink-0">
                <a href={link} target="_blank" rel="noreferrer">
                    <img
                        className="w-32 ml-2 hover:translate-y-1 transition-all"
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                    />
                </a>
            </div>
            <div>
                <div className="flex flex-col gap-y-2 items-center md:flex-row">
                    <a href={link} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-all">
                        <h2 className="text-xl font-semibold">{name}</h2>
                    </a>
                    <div className="ml-3 flex flex-wrap gap-2">{category}</div>
                </div>
                <p className="mt-3 text-gray-400 text-pretty">{description}</p>
            </div>
        </div>
    )
};