import { Button } from "@shared/ui/button";

export function ExerciseTabPeriod() {
    return (
        <div className="flex gap-2">
            <Button variant='secondary' title="1 мес." />
            <Button variant='secondary' title="2 мес." />
            <Button variant='secondary' title="3 мес." />
            <Button variant='secondary' title="1 год" />
        </div>
    )
}