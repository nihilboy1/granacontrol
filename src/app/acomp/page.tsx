"use client";
import { AppHeader } from "../components/AppHeader";
import { InAndOutBox } from "../components/InAndOutBox";
import { InAndOutItem } from "../components/InAndOutItem";

export default function Acomp() {
  return (
    <main className="flex flex-col  min-h-[100vh] gap-5 pb-[10rem] border">
      <AppHeader pageName="period" />
      <section className="h-fit grid grid-cols-2 grid-rows-1 gap-4 p-3 w-full ">
        <InAndOutBox title="ENTRADAS" color="bg-success">
          <InAndOutItem type="in" />
          <InAndOutItem type="in" />
          <InAndOutItem type="in" />
        </InAndOutBox>
        <InAndOutBox title="SAÍDAS" color="bg-warning">
          <InAndOutItem type="out" />
          <InAndOutItem type="out" />
          <InAndOutItem type="out" />
          <InAndOutItem type="out" />
        </InAndOutBox>
      </section>
    </main>
  );
}
