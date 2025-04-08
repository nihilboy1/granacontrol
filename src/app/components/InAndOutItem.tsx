"use state";

import { Repeat, X } from "@phosphor-icons/react/dist/ssr";
import { Switch } from "./Switch";
import { useState } from "react";
import { ArrowsClockwise, Spinner } from "@phosphor-icons/react";
import { itemProps } from "../acomp/page";

interface InAndOutItemProps {
  type: "in" | "out";
  entrie: itemProps;
}

export function InAndOutItem({ type, entrie }: InAndOutItemProps) {
  const [receivedOrPaid, setReceivedOrPaid] = useState(false);
  const [isRecurring, setIsRecurring] = useState(false);

  return (
    <div
      className={`transition-all flex flex-col w-[10rem] bg-white bg-opacity-30 p-2 py-3 rounded-[0.2rem] shadow-lg mb-3 border border-white ${
        !entrie.waiting && "border-opacity-0"
      }`}
    >
      <div className="flex gap-[0.5rem]">
        <div className="flex flex-col gap-[0.5rem]">
          <input
            type="text"
            value={entrie.description}
            placeholder="Descrição"
            className="max-w-[6.5rem]  rounded-[0.2rem] p-[0.20rem] px-2 text-sm shadow-lg"
          ></input>
          <input
            type="number"
            value={entrie.value}
            placeholder="Valor"
            className="max-w-[6.5rem] rounded-[0.2rem] p-[0.20rem] px-2 text-sm shadow-lg appearance-none"
          />
        </div>
        <div className="flex flex-col justify-evenly gap-2">
          <div className="relative group">
            <button className="bg-white text-warning rounded-full p-1 shadow-lg">
              <X size={15} weight="bold" />
            </button>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-0.5 px-2 py-1 text-xs font-black text-background bg-white rounded group-hover:delay-1000 delay-0 invisible group-hover:visible">
              EXCLUIR
            </span>
          </div>
          <div className="relative group">
            <button className="bg-white text-background rounded-full p-1 shadow-lg opacity-75 hover:opacity-100 ">
              <ArrowsClockwise size={15} weight="bold" />
            </button>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-0.5 px-2 py-1 text-xs font-black text-background bg-white rounded  group-hover:delay-1000 delay-0 invisible group-hover:visible">
              RECORRENTE
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center mt-3 gap-3">
        <h3
          className={`text-sm font-bold ${
            !entrie.waiting && "opacity-80 font-normal"
          }`}
        >
          {!entrie.waiting ? "Aguardando" : type == "in" ? "Recebido" : "Pago"}
        </h3>
        <Switch setIsChecked={setReceivedOrPaid} isChecked={entrie.waiting} />
      </div>
    </div>
  );
}
