interface GradiantTextProps {
    children: string;
}

export default function GradiantText({ children }: GradiantTextProps) {
    return <span className="bg-gradient-to-br from-cyan-500 to-purple-500 bg-clip-text font-bold text-transparent">{children}</span>;
}