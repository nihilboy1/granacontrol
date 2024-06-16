import { AppHeader } from "../components/AppHeader";
import { PeriodsBox } from "../components/PeriodsBox";

export default function PeriodsDashboard() {
  return (
    <main className="flex flex-col items-center w-full min-h-[100vh] gap-5 pb-[10rem]">
      <AppHeader pageName="periodsdashboard" />
      <PeriodsBox />
    </main>
  );
}
