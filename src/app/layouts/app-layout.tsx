import { ExercisesPage } from "@pages/exercises";
import { Header } from "@widgets/header";
import { Menu } from "@widgets/menu";
// import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <div className="flex w-7xl m-auto h-dvh overflow-hidden">
      <Menu />
      <main className="flex flex-col w-full p-10 grow min-h-0 overflow-hidden bg-white">
        <Header className="shrink-0" title="Упражнения" />
        {/* <Outlet /> */}
        <section className="overflow-y-auto scrollbar-none flex-1 min-h-0 m-auto">
          <ExercisesPage />
        </section>
      </main>
    </div>
  );
}
