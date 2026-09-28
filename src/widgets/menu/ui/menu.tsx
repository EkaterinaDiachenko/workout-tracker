import { ItemMenu } from "@shared/ui/item-menu";
import home from "@shared/assets/icon/home.svg";
import exercisesCalendar from "@shared/assets/icon/exercises-calendar.svg";
import dumbbell from "@shared/assets/icon/dumbbell.svg";
import graphBar from "@shared/assets/icon/graph-bar.svg";
import goal from "@shared/assets/icon/goal.svg";
import settings from "@shared/assets/icon/settings.svg";
import { Logo } from "@shared/ui/logo";
import { UserProfile } from "./user-profile";
import userPhoto from "@shared/assets/avatar.jpg";

export function Menu() {
  return (
    <aside className="flex flex-col w-72 m-5">
      <Logo src={dumbbell} alt="Гантеля" title="FitTrack" />
      <ul className="flex flex-col gap-3">
        <ItemMenu src={home} title="Главная" alt="Главная" />
        <ItemMenu src={exercisesCalendar} title="Тренировки" alt="Тренировки" />
        <ItemMenu src={dumbbell} title="Упражнения" alt="Упражнения" />
        <ItemMenu src={graphBar} title="Статистика" alt="Статистика" />
        <ItemMenu src={goal} title="Цели" alt="Цели" />
        <ItemMenu src={settings} title="Настройки" alt="Настройки" />
      </ul>
      <UserProfile
        src={userPhoto}
        name="Maria"
        email="maria01@yandex.ru"
        title="Выйти"
      />
    </aside>
  );
}
