import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';

const data = [
    { y: 12, x: '12.02.2024' },
    { y: 23, x: '12.03.2024' },
    { y: 50, x: '12.04.2024' },
    { y: 45, x: '12.05.2024' },
    { y: 55, x: '12.06.2024' },
];

export function ExerciseWeightChart() {
    return (
        <LineChart style={{ width: 800, aspectRatio: 1.618, maxWidth: 800 }} responsive data={data}>
            <CartesianGrid />
            <Line dataKey="y" />
            <XAxis dataKey="x" />
            <YAxis />
        </LineChart>
    )
}