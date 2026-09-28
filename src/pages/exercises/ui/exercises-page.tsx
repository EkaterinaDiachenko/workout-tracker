import { Exercise } from "@entities/exercise";
import barbellSquats from "@shared/assets/exercises-image/barbell-squats.jpeg";
import bulgarianSplitSquats from "@shared/assets/exercises-image/bulgarian-split-squats.jpeg";
import glutealBridge from "@shared/assets/exercises-image/gluteal-bridge.jpeg";
import romanianThrust from "@shared/assets/exercises-image/romanian-thrust.jpeg";

export function ExercisesPage() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <Exercise src={glutealBridge} title="Ягодичный мост" />
      <Exercise src={bulgarianSplitSquats} title="Болгарские выпады" />
      <Exercise src={barbellSquats} title="Присед" />
      <Exercise src={romanianThrust} title="Румынская тяга" />
      <Exercise src={glutealBridge} title="Ягодичный мост" />
      <Exercise src={bulgarianSplitSquats} title="Болгарские выпады" />
      <Exercise src={barbellSquats} title="Присед" />
      <Exercise src={romanianThrust} title="Румынская тяга" />
      <Exercise src={glutealBridge} title="Ягодичный мост" />
      <Exercise src={bulgarianSplitSquats} title="Болгарские выпады" />
      <Exercise src={barbellSquats} title="Присед" />
      <Exercise src={romanianThrust} title="Румынская тяга" />
      <Exercise src={glutealBridge} title="Ягодичный мост" />
      <Exercise src={bulgarianSplitSquats} title="Болгарские выпады" />
      <Exercise src={barbellSquats} title="Присед" />
      <Exercise src={romanianThrust} title="Румынская тяга" />
      <Exercise src={glutealBridge} title="Ягодичный мост" />
      <Exercise src={bulgarianSplitSquats} title="Болгарские выпады" />
      <Exercise src={barbellSquats} title="Присед" />
      <Exercise src={romanianThrust} title="Румынская тяга" />
      <Exercise src={glutealBridge} title="Ягодичный мост" />
      <Exercise src={bulgarianSplitSquats} title="Болгарские выпады" />
      <Exercise src={barbellSquats} title="Присед" />
      <Exercise src={romanianThrust} title="Румынская тяга" />
    </div>
  );
}
