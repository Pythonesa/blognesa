import GradiantText from "@/components/GradiantText";

interface ILogoProps {
    icon: string;
    name: string;
};

export default function Logo({ icon, name }: ILogoProps) {
    return (
        <div className="flex gap-1 items-center text-xl font-bold">
            <img src={icon} alt={name} />
            <GradiantText>{name}</GradiantText>
        </div>
    )
};