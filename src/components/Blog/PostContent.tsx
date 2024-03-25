import type { ReactNode } from "react";
import type { IFrontMatter } from "@/types/IFrontMatter";

interface IPostContentProps {
    content: IFrontMatter;
    children: ReactNode;
}

export default function PostContent({ content, children }: IPostContentProps) {
    return (
        <div className="mx-auto mt-4">
            <div className="aspect-w-3 aspect-h-2 max-w-prose mx-auto">
                <img
                    className="object-cover object-center h-full rounded-lg m-auto"
                    src={content.imgSrc}
                    alt={content.imgAlt}
                    loading="lazy"
                />
            </div>
            <div className="mt-8 prose-img:rounded-lg text-justify">
                {children}
            </div>
        </div>
    )
}