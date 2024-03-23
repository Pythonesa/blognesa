interface ILogoProps {
    icon: string;
    name: string;
};

export default function Logo({ icon, name }: ILogoProps) {
    return (
        <div className="flex gap-1 items-center bg-gradient-to-br from-cyan-500 to-purple-500 bg-clip-text text-xl font-bold text-transparent">
            <img src={icon} alt={name} />
            {name}
        </div>
    )
};