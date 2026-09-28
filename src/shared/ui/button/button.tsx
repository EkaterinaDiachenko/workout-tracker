type TButton = {
    title: string;
    variant?: 'primary' | 'secondary';
}

const variants = {
    primary: 'bg-transparent text-black border-b-black',
    secondary: 'bg-primary text-white',
}

export function Button({ title, variant='primary' }: TButton) {
    return (
        <button className={`rounded-lg px-4 py-2 cursor-pointer ${variants[variant]}`} type="button">{title}</button>
    )
}