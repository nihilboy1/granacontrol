"use client";

import { Icon as IconType } from "@phosphor-icons/react";
import { motion } from "framer-motion";

interface InputProps {
  placeholder: string;
  Icon: IconType;
}

export function Input({ placeholder, Icon }: InputProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.01,
        transition: {
          duration: 0.2,
        },
      }}
      initial={{ opacity: 0.05, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      className="flex border border-white w-full rounded-md p-2 gap-2"
    >
      <div className="border p-2 bg-white rounded-md">
        <Icon color="#111111" weight="regular" size={20} />
      </div>
      <input
        type="text"
        className=" w-full rounded-md px-4 placeholder:font-bold "
        placeholder={placeholder}
      />
    </motion.div>
  );
}
