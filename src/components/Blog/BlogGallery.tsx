import type { MarkdownInstance } from "astro";
import type { IFrontMatter } from "@/types/IFrontMatter";
import BlogCard from "@/components/Blog/BlogCard";

interface IRecentPostsProps {
    posts: MarkdownInstance<IFrontMatter>[];
}

export default function BlogGallery({ posts }: IRecentPostsProps) {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {posts.map((post) => (
                <BlogCard key={post.url} instance={post} />
            ))}
        </div>
    );
}