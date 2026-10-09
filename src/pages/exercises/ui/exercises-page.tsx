import { Exercise } from "@entities/exercise";
import barbellSquats from "@shared/assets/exercises-image/barbell-squats.jpeg";
import bulgarianSplitSquats from "@shared/assets/exercises-image/bulgarian-split-squats.jpeg";
import glutealBridge from "@shared/assets/exercises-image/gluteal-bridge.jpeg";
import romanianThrust from "@shared/assets/exercises-image/romanian-thrust.jpeg";

export function ExercisesPage() {
  return (
    <ul className="grid grid-cols-2 gap-6">
      <li>
        <Exercise src={glutealBridge} title="Ягодичный мост" />
      </li>
      <li>
        <Exercise src={bulgarianSplitSquats} title="Болгарские выпады" />
      </li>
      <li>
        <Exercise src={barbellSquats} title="Присед" />
      </li>
      <li>
        <Exercise src={romanianThrust} title="Румынская тяга" />
      </li>
      <li>
        <Exercise src={glutealBridge} title="Ягодичный мост" />
      </li>
      <li>
        <Exercise src={bulgarianSplitSquats} title="Болгарские выпады" />
      </li>
      <li>
        <Exercise src={barbellSquats} title="Присед" />
      </li>
      <li>
        <Exercise src={romanianThrust} title="Румынская тяга" />
      </li>
      <li>
        <Exercise src={glutealBridge} title="Ягодичный мост" />
      </li>
      <li>
        <Exercise src={bulgarianSplitSquats} title="Болгарские выпады" />
      </li>
      <li>
        <Exercise src={barbellSquats} title="Присед" />
      </li>
      <li>
        <Exercise src={romanianThrust} title="Румынская тяга" />
      </li>

    </ul>
  );
}
