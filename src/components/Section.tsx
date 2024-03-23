import type { ReactNode } from "react";

interface ISectionProps {
    title?: string,
    children: ReactNode;
}

export default function Section({ title, children }: ISectionProps) {
    return (
        <section className="mx-auto max-w-screen-lg px-4 py-6">
            {title && (
                <h1 className="mb-6 text-2xl font-bold">{title}</h1>
            )}
            {children}
        </section>
    );
}