"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface MonthButtonProps {
  monthLabel: string;
}

export function MonthButton({ monthLabel }: MonthButtonProps) {
  const router = useRouter();

  function handleNavigateToPeriod() {}
  return (
    <motion.button
      initial={{
        opacity: 0.05,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      whileHover={{
        backgroundColor: "#EFF28D",
        scale: 1.4,
        marginTop: 10,
        marginBottom: 10,
      }}
      className="bg-white rounded-md p-4 px-10 text-xl font-bold shadow-lg  sm:text-2xl sm:px-14 "
      onClick={handleNavigateToPeriod}
    >
      {monthLabel}
    </motion.button>
  );
}
