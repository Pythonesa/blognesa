interface IHeroSocialProps {
    src: string,
    alt: string;
};

export default function HeroSocial({ src, alt }: IHeroSocialProps) {
    return (
        <img 
            className="w-12 h-12 hover:translate-y-1" 
            src={src} 
            alt={alt} 
            loading="lazy"
        />
    );
}