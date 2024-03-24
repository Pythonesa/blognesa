import type { IFrontMatter, MarkdownInstance } from "@/types/IFrontMatter";

export const sortByDate = (posts: MarkdownInstance<IFrontMatter>[]) => {
    return posts.sort((a, b) => {
        return new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf();
    });
};
