import type { ReactNode } from "react";
import type { IFrontMatter } from "@/types/IFrontMatter";
import PostHeader from "@/components/Blog/PostHeader";
import PostContent from "@/components/Blog/PostContent";
import Section from "@/components/Section";

interface IPostProps {
    frontmatter: IFrontMatter;
    children: ReactNode;
};

export default function Post({ frontmatter, children }: IPostProps) {
    return (
        <Section>
            <PostHeader
                content={frontmatter}
            />
            <PostContent content={frontmatter}>
                {children}
            </PostContent>
        </Section>
    );
}