import type { ReactNode } from "react";

interface INavMenuProps {
    children: ReactNode
}

export default function NavMenu({ children }: INavMenuProps) {
    return (
        <nav>
            <ul className="flex gap-4 font-medium text-gray-300">
                {children}
            </ul>
        </nav>
    );
}