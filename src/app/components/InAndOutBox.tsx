import { ReactNode } from "react";
import { AddItemButton } from "./AddItemButton";
import { Resume } from "./Resume";

interface InAndOutBoxProps {
  title: string;
  color: string;
  children: ReactNode;
}

export function InAndOutBox({ title, color, children }: InAndOutBoxProps) {
  return (
    <div
      className={`p-4 items-center h-fit flex flex-col rounded-lg ${color} shadow-lg`}
    >
      <h2 className="text-xl font-bold tracking-[0.4rem] mb-3">{title}</h2>
      {children}
      <AddItemButton />
      <Resume />
    </div>
  );
}
