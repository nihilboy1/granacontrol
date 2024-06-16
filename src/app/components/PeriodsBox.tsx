"use client";

import { motion } from "framer-motion";
import { PeriodButton } from "./PeriodButton";
import { Plus } from "@phosphor-icons/react";
import { useState } from "react";

type UserPeriod = {
  year: number;
  month: number;
  name: string;
};

const monthNames = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

export function PeriodsBox() {
  const [userPeriods, setUserPeriods] = useState<UserPeriod[]>([]);

  const addNewPeriod = () => {
    let newYear, newMonth;

    if (userPeriods.length === 0) {
      const currentDate = new Date();
      newYear = currentDate.getFullYear();
      newMonth = currentDate.getMonth() + 1;
    } else {
      const lastPeriod = userPeriods[userPeriods.length - 1];
      newYear = lastPeriod.year;
      newMonth = lastPeriod.month + 1;

      if (newMonth > 12) {
        newMonth = 1;
        newYear += 1;
      }
    }

    const newPeriod: UserPeriod = {
      year: newYear,
      month: newMonth,
      name: monthNames[newMonth - 1],
    };

    setUserPeriods([...userPeriods, newPeriod]);
  };

  const removeLastPeriod = () => {
    setUserPeriods(userPeriods.slice(0, -1));
  };

  return (
    <>
      {userPeriods.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <PeriodButton
            monthLabel={`${item.year} / ${item.name} ${item.month
              .toString()
              .padStart(2, "0")}`}
          />
        </div>
      ))}
      <motion.button
        initial={{ opacity: 0.05, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        whileHover={{
          scale: 1.02,
        }}
        onClick={addNewPeriod}
        className="bg-primary font-bold p-4 rounded-md mt-12 w-fit flex items-center gap-2"
      >
        Adicionar Período
        <Plus size={28} weight="bold" />
      </motion.button>
    </>
  );
}
