export interface IFrontMatter {
    title: string;
    description: string;
    date: string;
    imgSrc: string;
    imgAlt: string;
    draft: boolean;
}

export type Page<T> = import("astro").Page<T>;

export type MarkdownInstance<T extends Record<string, any>> = import("astro").MarkdownInstance<T>;

export type FrontmatterPage = Page<MarkdownInstance<IFrontMatter>>;