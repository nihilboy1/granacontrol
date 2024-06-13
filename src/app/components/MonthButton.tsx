"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function MonthButton({ label }: { label: string }) {
  return (
    <Link href="/monthbalance">
      <motion.button
      
        initial={{
          opacity: 0.05,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.2,
            ease: "easeOut",
          },
        }}
        whileHover={{
          backgroundColor: "#EFF28D",
          scale: 1.4,
          marginTop: 10,
          marginBottom: 10,
          transition: {
            duration: 0.2,
          },
        }}
        className="bg-white rounded-md p-4 px-14 text-2xl font-bold shadow-lg"
      >
        {label}
      </motion.button>
    </Link>
  );
}
