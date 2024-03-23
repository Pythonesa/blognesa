import type { ReactNode } from "react";

interface IHeaderTwoColumnsProps {
    children: ReactNode
}

export default function HeaderTwoColumns({ children }: IHeaderTwoColumnsProps) {
    return (
        <div className="flex flex-col gap-y-4 sm:flex-row sm:items-center sm:justify-between">
            {children}
        </div>
    )
}