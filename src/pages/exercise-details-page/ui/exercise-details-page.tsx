import { ExerciseTabTitle } from './exercise-tab-title';
import { ExerciseTabPeriod } from './exercise-tab-period';
import { HistoryExercises } from './history-exercises';
import { ExerciseWeightChart } from './exercise-weight-chart';

export function ExerciseDetailsPage() {
  return (
      <div className='flex flex-col gap-5 items-center'>
        <ExerciseTabTitle />
        <ExerciseTabPeriod />
        <ExerciseWeightChart />
        <HistoryExercises time="20 июня 2025"/>
      </div>
  )
}