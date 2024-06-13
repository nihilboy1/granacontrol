import { InnerHeader } from "../components/InnerHeader";
import { MonthButton } from "../components/MonthButton";

const months = [
  {
    label: "JAN | 01",
  },
  {
    label: "FEV | 02",
  },
  {
    label: "MAR | 03",
  },
  {
    label: "ABR | 04",
  },
  {
    label: "MAI | 05",
  },
  {
    label: "JUN | 06",
  },
  {
    label: "JUL | 07",
  },
  {
    label: "AGO | 08",
  },
  {
    label: "SET | 09",
  },
  {
    label: "OUT | 10",
  },
  {
    label: "NOV | 11",
  },
  {
    label: "DEZ | 12",
  },
];

export default function monthSelector() {
  return (
    <>
      <InnerHeader title="SELECIONAR MÊS" />
      <main className="flex flex-col items-center p-6  w-full min-h-[100vh] gap-5 pb-[10rem]">
        {months.map((month) => {
          return <MonthButton key={month.label} label={month.label} />;
        })}
      </main>
    </>
  );
}
