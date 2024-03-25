import type { ReactNode } from "react";
import type { IFrontMatter } from "@/types/IFrontMatter";

interface IPostContentProps {
    content: IFrontMatter;
    children: ReactNode;
}

export default function PostContent({ content, children }: IPostContentProps) {
    return (
        <div className="mx-auto max-w-prose mt-4">
            <div className="aspect-w-3 aspect-h-2">
                <img
                    className="object-cover object-center h-full rounded-lg m-auto"
                    src={content.imgSrc}
                    alt={content.imgAlt}
                    loading="lazy"
                />
            </div>
            <div className="prose prose-invert mt-8 prose-img:rounded-lg">
                {children}
            </div>
        </div>
    )
}