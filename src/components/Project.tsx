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
        <div className="flex flex-col items-center gap-x-6 rounded-md bg-slate-800 px-2 py-6 md:flex-row">
            <div className="shrink-0">
                <a href={link} target="_blank" rel="noreferrer">
                    <img
                        className="w-24 h-24 ml-4 hover:translate-y-1 transition-all mx-auto"
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                    />
                </a>
            </div>
            <div>
                <div className="flex flex-col gap-y-2 items-center md:flex-row">
                    <a href={link} target="_blank" rel="noreferrer" className="font-bold hover:bg-gradient-to-br from-cyan-400 to-purple-400 hover:bg-clip-text hover:text-transparent transition-all">
                        <h2 className="text-xl font-semibold">{name}</h2>
                    </a>
                    <div className="ml-3 flex flex-wrap gap-2">{category}</div>
                </div>
                <p className="mt-3 text-gray-400 text-pretty">{description}</p>
            </div>
        </div>
    )
};