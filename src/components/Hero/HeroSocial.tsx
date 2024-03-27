interface IHeroSocialProps {
    src: string,
    alt: string;
};

export default function HeroSocial({ src, alt }: IHeroSocialProps) {
    return (
        <img 
            className="w-16 h-16 hover:translate-y-1 transition-all" 
            src={src} 
            alt={alt} 
            loading="lazy"
        />
    );
}