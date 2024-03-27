import GradiantText from "@/components/GradiantText";
import HeroSocial from "@/components/Hero/HeroSocial";
import HeroWithAvatar from "@/components/Hero/HeroWithAvatar";
import Section from "@/components/Section";

export default function Hero() {
    return (
        <Section>
            <HeroWithAvatar
                title={
                    <>
                        👋🏻 ¡Hola! Soy <GradiantText>María</GradiantText>, también conocida como <GradiantText>Pythonesa</GradiantText>
                    </>
                }
                description={
                    <>
                        Soy una desarrolladora de software que adora el lenguaje python y el software libre.<br/>
                        En este blog planeo publicar proyectos, tutoriales, artículos y alguna otra cosa que se me ocurra.
                    </>
                }
                avatar={
                    <img
                        className="h-56 w-auto"
                        src="./assets/images/pythonesa.gif"
                        alt="Pythonesa"
                        loading="lazy"
                    />
                }
                socialButtons={
                    <>
                        <a href="https://discord.gg/BcSA5n3wcw" target="_blank" rel="noreferrer">
                            <HeroSocial
                                src="./assets/images/discord.png"
                                alt="Comunidad de Discord"
                            />
                        </a>
                        <a href="https://github.com/pythonesa" target="_blank" rel="noreferrer">
                            <HeroSocial
                                src="./assets/images/github.png"
                                alt="GitHub"
                            />
                        </a>
                        <a href="https://www.youtube.com/@pythonesa" target="_blank" rel="noreferrer">
                            <HeroSocial
                                src="./assets/images/youtube.png"
                                alt="YouTube"
                            />
                        </a>
                        <a href="https://www.twitch.tv/pythonesa" target="_blank" rel="noreferrer">
                            <HeroSocial
                                src="./assets/images/twitch.png"
                                alt="Twitch"
                            />
                        </a>
                    </>
                }
            />
        </Section>
    );
}