'use client'
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface PeriodButtonProps {
  monthLabel: string;
}

export function PeriodButton({ monthLabel }: PeriodButtonProps) {
  const router = useRouter();
  function handleNavigateToPeriod() {
    const sanitizedMonthLabel = monthLabel
      .replace(/[^a-zA-Z0-9]/g, "")
      .toLowerCase();
    router.push(`periodsdashboard/${sanitizedMonthLabel}`);
  }

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
        scale: 1.2,
        marginTop: 10,
        marginBottom: 10,
      }}
      className="bg-white rounded-md p-3 px-10 text-xl font-bold shadow-lg  sm:text-2xl "
      onClick={handleNavigateToPeriod}
    >
      {monthLabel}
    </motion.button>
  );
}
