interface ISerieCardProps {
    title: string;
    description: string;
    link: string;
    imgSrc: string;
    imgAlt: string;
}

export default function BlogCard(serie: ISerieCardProps) {
    return (
        <a className="hover:translate-y-1 transition-all" href={serie.link}>
            <div className="overflow-hidden rounded-md bg-slate-800 text-center">
                <div className="aspect-w-3 aspect-h-2">
                    <img className="mx-auto min-w-[350px] min-h-[350px]"
                        src={serie.imgSrc}
                        alt={serie.imgAlt}
                        loading="lazy"
                    />
                </div>

                <div className="px-3 pt-4 pb-6">
                    <h2 className="text-xl font-semibold">{serie.title}</h2>
                    <div className="mt-2 text-sm">
                        {serie.description}
                    </div>
                </div>
            </div>
        </a>
    )
}