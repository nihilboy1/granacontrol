import { AppHeader } from "@/app/components/AppHeader";
import { InvalidPeriod } from "@/app/components/InvalidPeriod";

export default function Period({ params }: { params: { period: string } }) {
  const { period } = params;

  const validYears = ["2024", "2025"];
  const validMonths = [
    "jan01",
    "fev02",
    "mar03",
    "abr04",
    "mai05",
    "jun06",
    "jul07",
    "ago08",
    "set09",
    "out10",
    "nov11",
    "dez12",
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
