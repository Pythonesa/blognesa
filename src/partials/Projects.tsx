import ColorTags from "@/components/ColorTags";
import { Colors } from "@/components/ColorTags";
import GradiantText from "@/components/GradiantText";
import Project from "@/components/Project";
import Section from "@/components/Section";

export default function Projects() {
    return (
        <Section
            title={
                <>
                    <GradiantText>Proyectos</GradiantText> Recientes
                </>
            }
        >
            <div className="flex flex-col gap-6">
                <Project
                    name="Pythonesa's Blog"
                    description="Este proyecto fue creado para practicar frontend y experimentar con la creación de un blog que genere las rutas a los posts de manera automática a partir de archivos de markdown. Es un proyecto de código abierto y es el que utiliza este mismo blog."
                    link="https://github.com/Pythonesa/blognesa"
                    img={{
                        src: "./favicon.png",
                        alt: "Pythonesa's Blog",
                    }}
                    category={
                            <>
                                <ColorTags color={Colors.INDIGO}>TypeScript</ColorTags>
                                <ColorTags color={Colors.AMBER}>Astro</ColorTags>
                                <ColorTags color={Colors.EMERALD}>React</ColorTags>
                                <ColorTags color={Colors.CYAN}>Tailwind</ColorTags>
                                <ColorTags color={Colors.PURPLE}>Markdown</ColorTags>
                                <ColorTags color={Colors.ORANGE}>Open Source</ColorTags>
                                <ColorTags color={Colors.FUCHSIA}>Frontend</ColorTags>
                            </>
                        }
                />
                <Project
                    name="Pythoneso Chat Bot"
                    description="Un bot que lee e interactúa con el chat de mi canal de twitch utilizando la librería TwitchIO para python. Tiene comandos, TTS(Text-To-Speech), reproduce sonidos y cuenta con una interfaz gráfica para controlar funcionalidades y facilitar la lectura de los mensajes enviados al chat."
                    link="https://github.com/Pythonesa/pythoneso-chat-bot"
                    img={{
                        src: "./assets/images/pythoneso.png",
                        alt: "Pythoneso Chat Bot",
                    }}
                    category={
                            <>
                                <ColorTags color={Colors.GREEN}>Python</ColorTags>
                                <ColorTags color={Colors.ORANGE}>Open Source</ColorTags>
                                <ColorTags color={Colors.ZINC}>Backend</ColorTags>
                                <ColorTags color={Colors.FUCHSIA}>Frontend</ColorTags>
                            </>
                        }
                />
            </div>
        </Section>
    );
};