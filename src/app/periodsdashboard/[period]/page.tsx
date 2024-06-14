import { AppHeader } from "@/app/components/AppHeader";
import { InvalidPeriod } from "@/app/components/InvalidPeriod";

export default function Period({ params }: { params: { period: string } }) {
  const { period } = params;

  const validYears = ["2024", "2025"];
  const validMonths = [
    "jan",
    "fev",
    "mar",
    "abr",
    "mai",
    "jun",
    "jul",
    "ago",
    "set",
    "out",
    "nov",
    "dez",
  ];

  const year = period.slice(0, 4);
  const month = period.slice(4);

  const isValidFormat =
    validYears.includes(year) && validMonths.includes(month);

  if (isValidFormat) {
    return (
      <main className="flex flex-col w-full min-h-[100vh] gap-5 pb-[10rem]">
        <AppHeader pageName="period" period={period} />
      </main>
    );
  } else {
    return <InvalidPeriod />;
  }
}
