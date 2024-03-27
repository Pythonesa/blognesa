import Logo from "@/components/Header/Logo";
import NavMenu from "@/components/Header/NavBar/NavMenu";
import NavMenuItem from "@/components/Header/NavBar/NavMenuItem";
import HeaderTwoColumns from "@/components/Header/HeaderTwoColumns";
import Section from "@/components/Section";

export default function Navbar() {
    return (
        <Section>
            <HeaderTwoColumns>
                <a href="/"><Logo icon={"/favicon.png"} name="Icono que muestra un diálogo con el texto Blog y un lápiz escribiendo líneas." /></a>
        
                <NavMenu>
                    <NavMenuItem href="/">Home</NavMenuItem>
                    <NavMenuItem href="/blog">Blog</NavMenuItem>
                    <NavMenuItem href="/series">Series</NavMenuItem>
                </NavMenu>
            </HeaderTwoColumns>
        </Section>
    );
}