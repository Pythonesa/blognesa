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
            </div>
        </Section>
    );
};