"use client";
import { AppHeader } from "../components/AppHeader";
import { InAndOutBox } from "../components/InAndOutBox";
import { InAndOutItem } from "../components/InAndOutItem";

type mockUserPeriod = {
  period: string;
  entries: itemProps[];
};

export type itemProps = {
  description: string;
  value: number;
  recurrent: boolean;
  waiting: boolean;
};

const userMockPeriod: mockUserPeriod = {
  period: "Março 2025",
  entries: [
    { description: "Mãe", value: 59.9, recurrent: false, waiting: true },
    { description: "Salário", value: 3500, recurrent: true, waiting: true },
    { description: "Freelance", value: 800, recurrent: false, waiting: false },
    { description: "Reembolso", value: 120, recurrent: false, waiting: true },
    {
      description: "Venda de Item",
      value: 250,
      recurrent: false,
      waiting: false,
    },
    {
      description: "Investimentos",
      value: 300,
      recurrent: true,
      waiting: false,
    },
  ],
};

export default function Acomp() {
  return (
    <main className="flex flex-col  min-h-[100vh] gap-5 pb-[10rem] border">
      <AppHeader pageName="period" />
      <section className="h-fit grid grid-cols-2 grid-rows-1 gap-4 p-3 w-full ">
        <InAndOutBox title="ENTRADAS" color="bg-success">
          {userMockPeriod.entries.map((entrie) => {
            return <InAndOutItem type="in" entrie={entrie} />;
          })}
        </InAndOutBox>
        <InAndOutBox title="SAÍDAS" color="bg-warning">
          <></>
        </InAndOutBox>
      </section>
    </main>
  );
}
