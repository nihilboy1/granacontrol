"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface AccessButtonsProps {
  mainButtonText: string;
  secondaryText: string;
  href: string;
}
export function AccessButtons({
  mainButtonText,
  secondaryText,
  href,
}: AccessButtonsProps) {
  return (
    <>
      <motion.button
        initial={{ opacity: 0.05, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        whileHover={{
          scale: 1.02,
        }}
        className="bg-primary font-bold p-4 rounded-md mt-12"
      >
        {mainButtonText}
      </motion.button>
      <motion.button
        initial={{
          opacity: 0.05,
          scale: 0.9,
          border: "1px solid rgba(17, 17, 17, 0)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          width: 0,
        }}
        whileHover={{
          borderBottom: "1px solid #eff28d",
          width: "14rem",
          fontWeight: "bold",
          scale: 1.01,
        }}
        className="text-white w-fit mx-auto flex flex-col items-center "
      >
        <Link className="w-[19rem]" href={href}>
          {secondaryText}
        </Link>
      </motion.button>
    </>
  );
}
