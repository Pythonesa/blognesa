import type { MarkdownInstance } from "astro";
import type { IFrontMatter } from "@/types/IFrontMatter";
import { format } from "date-fns";

interface IBlogCardProps {
    instance: MarkdownInstance<IFrontMatter>;
}

export default function BlogCard({ instance }: IBlogCardProps) {
    return (
        <a className="hover:translate-y-1 transition-all" href={instance.url}>
            <div className="overflow-hidden rounded-md bg-slate-800 text-center">
                <div className="aspect-w-3 aspect-h-2">
                    <img className="mx-auto"
                        src={instance.frontmatter.imgSrc}
                        alt={instance.frontmatter.imgAlt}
                        loading="lazy"
                    />
                </div>

                <div className="px-3 pt-4 pb-6">
                    <h2 className="text-xl font-semibold">{instance.frontmatter.title}</h2>
                    <div className="mt-1 text-gray-400 text-xs">
                        {format(new Date(instance.frontmatter.date), "dd MMM yyyy")}
                    </div>
                    <div className="mt-2 text-sm">
                        {instance.frontmatter.description}
                    </div>
                </div>
            </div>
        </a>
    )
}