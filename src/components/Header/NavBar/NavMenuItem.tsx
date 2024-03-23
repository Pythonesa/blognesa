interface INavMenuItemProps {
    href: string,
    children: string,
    target?: "_blank" | "_self" | "_parent" | "_top";
};

export default function NavMenuItem({ href, children, target = "_self" }: INavMenuItemProps) {
    return (
        <li className="bg-gradient-to-br from-cyan-500 to-purple-500 bg-clip-text font-bold text-xl text-transparent hover:from-cyan-400 hover:to-purple-400">
            <a href={href} target={target}>{children}</a>
        </li>
    )
};