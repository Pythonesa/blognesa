import GradiantText from "@/components/GradiantText";

interface ILogoProps {
    icon: string;
    name: string;
    imgalt: string;
};

export default function Logo({ icon, name, imgalt }: ILogoProps) {
    return (
        <div className="flex gap-1 items-center text-xl font-bold">
            <img src={icon} alt={imgalt} loading="lazy" className="w-16 h-16" />
            <GradiantText>{name}</GradiantText>
        </div>
    )
};