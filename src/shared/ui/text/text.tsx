type TText = {
    title: string;
}

export function Text({ title }: TText) {
    return (
        <p>{title}</p>
    )
}