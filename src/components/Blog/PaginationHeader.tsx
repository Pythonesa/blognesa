interface IPaginationHeaderProps {
    title: string;
    description: string;
};

export default function PaginationHeader({ title, description }: IPaginationHeaderProps) {
    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="mt-3 text-pretty text-gray-200">{description}</p>
        </div>
    );
}