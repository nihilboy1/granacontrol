"use client";
import { User } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import { YearSelector } from "./YearSelector";
import Link from "next/link";

export function InnerHeader({ title }: { title: string }) {
  return (
    <motion.header
      initial={{
        opacity: 0.05,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.2,
          ease: "easeOut",
        },
      }}
      className="bg-primary p-2 px-4 flex justify-between items-center relative"
    >
      <YearSelector />
      <h1 className="font-bold text-xl absolute  translate-x-1/2 right-[50%] mt-1 ">
        {title}
      </h1>
      <Link href="/profile">
        <motion.button
          className="mt-1"
          initial={{
            borderTop: "2px solid rgba(17, 17, 17, 0)",
          }}
          whileHover={{
            borderTop: "2px solid rgba(17, 17, 17, 1)",
          }}
        >
          <User weight="fill" size={24} />
        </motion.button>
      </Link>
    </motion.header>
  );
}
