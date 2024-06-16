"use state";

import { Repeat, X } from "@phosphor-icons/react/dist/ssr";
import { Switch } from "./Switch";
import { useState } from "react";

interface InAndOutItemProps {
  type: "in" | "out";
}

export function InAndOutItem({ type }: InAndOutItemProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      className={`transition-all flex flex-col bg-white bg-opacity-30 p-2 py-3 rounded-[0.2rem] shadow-lg mb-3 border border-white ${
        !isChecked && "border-opacity-0"
      }`}
    >
      <div className="flex gap-[0.5rem]">
        <div className="flex flex-col gap-[0.5rem]">
          <input
            type="text"
            placeholder="Descrição"
            className="max-w-[6.5rem]  rounded-[0.2rem] p-[0.20rem] px-2 text-sm shadow-lg"
          />
          <input
            type="number"
            placeholder="Valor"
            className="max-w-[6.5rem] rounded-[0.2rem] p-[0.20rem] px-2 text-sm shadow-lg appearance-none"
          />
        </div>
        <div className="flex flex-col justify-evenly gap-2">
          <button className="bg-white text-warning rounded-full p-1 shadow-lg">
            <X size={15} weight="bold" />
          </button>
          <button className="bg-white text-background rounded-full p-1 shadow-lg">
            <Repeat size={15} weight="bold" />
          </button>
        </div>
      </div>
      <div className="w-full flex justify-between items-center mt-3 gap-3">
        <h3
          className={`text-sm font-bold ${
            !isChecked && "opacity-80 font-normal"
          }`}
        >
          {!isChecked ? "Aguardando" : type == "in" ? "Recebido" : "Pago"}
        </h3>
        <Switch setIsChecked={setIsChecked} isChecked={isChecked} />
      </div>
    </div>
  );
}
