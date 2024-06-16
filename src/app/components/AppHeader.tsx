"use client";
import { motion } from "framer-motion";
import { ProfileButton } from "./ProfileButton";
import { ReturnButton } from "./ReturnButton";

interface AppHeaderProps {
  pageName: "periodsdashboard" | "period" | "profile";
  period?: string;
}

export function AppHeader({ pageName, period }: AppHeaderProps) {
  const getPageTitle = (): string => {
    switch (pageName) {
      case "periodsdashboard":
        return "Painel de Períodos";
      case "period":
        if (period) {
          const year = period.slice(0, 4);
          const month = period.slice(4,7);
          const monthName = period.slice(7)
          return `Acompanhamento ${year} ${month}/${monthName}`.toUpperCase();
        }
        return "";
      case "profile":
        return "Perfil";
      default:
        return "";
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0.05 }}
      animate={{ opacity: 1 }}
      className="bg-primary p-2 px-4 flex justify-between items-center w-full"
    >
      {pageName !== "periodsdashboard" && <ReturnButton />}
      <h1 className="font-bold text-xl">{getPageTitle()}</h1>
      {pageName !== "profile" && <ProfileButton />}
    </motion.header>
  );
}
