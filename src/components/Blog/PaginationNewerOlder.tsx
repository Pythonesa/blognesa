import type { FrontmatterPage } from "@/types/IFrontMatter";

interface IPaginationNewerOlderProps {
    page: FrontmatterPage;
};

export default function PaginationNewerOlder({ page }: IPaginationNewerOlderProps) {
    return(
        <div className="flex gap-8 justify-center">
            {page.url.prev && <a href={page.url.prev} className="hover:underline">👈🏻 Anteriores</a>}
            {page.url.next && <a href={page.url.next} className="hover:underline">Siguientes 👉🏻</a>}
        </div>
    );
};