import type { ReactNode } from "react";

interface IHeroWithAvatarProps {
    title: ReactNode;
    description: ReactNode;
    avatar: ReactNode;
    socialButtons: ReactNode;
}

export default function HeroWithAvatar({ title, description, avatar, socialButtons }: IHeroWithAvatarProps) {
    return(
        <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-16">
            <div>
                <h1 className="text-3xl md:text-4xl font-bold text-pretty">{title}</h1>
                <p className="text-lg leading-9 mt-4 text-pretty">{description}</p>
                <div className="flex gap-4 mt-4">
                    {socialButtons}
                </div>
            </div>
            <div className="shrink-0 mt-2">{avatar}</div>
        </div>
    )
    
}