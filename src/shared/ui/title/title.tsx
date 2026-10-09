type TTitle = {
    title: string;
}

export function Title({ title }: TTitle) {
    return (
        <p>{title}</p>
    )
}