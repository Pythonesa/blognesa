import { format } from "date-fns";
import type { IFrontMatter } from "@/types/IFrontMatter";

interface IPostHeaderProps {
    content: IFrontMatter;
};

export default function PostHeader({ content }: IPostHeaderProps) {
    return(
        <>
            <h1 className="text-3xl font-bold text-center">{content.title}</h1>
            <div className="text-center mt-2 text-sm text-gray-400">
                By Pythonesa on{" "}
                {format(new Date(content.date), "dd MMM yyyy")}
            </div>
        </>
    )
}