import { Title } from "@shared/ui/title"

type THistoryExercises = {
    time: string;
}

export function HistoryExercises({ time }: THistoryExercises) {
    return (
        <div className="flex flex-col gap-3">
            <Title title="История упражнения" />
            <ol className="flex flex-col gap-5">
                <li className="flex gap-5">
                    <time dateTime="2025-06-20">{time}</time>
                    <span>110 кг × 8,7,8</span>
                    <span>+ 5 кг</span>
                </li>
                <li className="flex gap-5">
                    <time dateTime="2025-06-20">{time}</time>
                    <span>110 кг × 8,7,8</span>
                    <span>+ 5 кг</span>
                </li>
                <li className="flex gap-5">
                    <time dateTime="2025-06-20">{time}</time>
                    <span>110 кг × 8,7,8</span>
                    <span>+ 5 кг</span>
                </li>
                <li className="flex gap-5">
                    <time dateTime="2025-06-20">{time}</time>
                    <span>110 кг × 8,7,8</span>
                    <span>+ 5 кг</span>
                </li>
                <li className="flex gap-5">
                    <time dateTime="2025-06-20">{time}</time>
                    <span>110 кг × 8,7,8</span>
                    <span>+ 5 кг</span>
                </li>
                <li className="flex gap-5">
                    <time dateTime="2025-06-20">{time}</time>
                    <span>110 кг × 8,7,8</span>
                    <span>+ 5 кг</span>
                </li>
                <li className="flex gap-5">
                    <time dateTime="2025-06-20">{time}</time>
                    <span>110 кг × 8,7,8</span>
                    <span>+ 5 кг</span>
                </li>
                <li className="flex gap-5">
                    <time dateTime="2025-06-20">{time}</time>
                    <span>110 кг × 8,7,8</span>
                    <span>+ 5 кг</span>
                </li>
                <li className="flex gap-5">
                    <time dateTime="2025-06-20">{time}</time>
                    <span>110 кг × 8,7,8</span>
                    <span>+ 5 кг</span>
                </li>
            </ol>
        </div>
    )
}