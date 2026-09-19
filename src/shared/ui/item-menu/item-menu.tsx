type TItemMenu = {
    src: string;
    title: string;
    alt: string;
}

export function ItemMenu({ src, title, alt }: TItemMenu) {
    return (
        <li className="flex h-8 gap-6 px-3">
            <img className="w-8" src={src} alt={alt} />
            <p>{title}</p>
        </li>
    )
}
