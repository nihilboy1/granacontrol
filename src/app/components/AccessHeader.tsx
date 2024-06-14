"use client";

import Image from "next/image";
import GranaControlLogo from "../../../public/logo.svg";
import { motion } from "framer-motion";

export function AccessHeader({ description }: { description: string }) {
  return (
    <motion.header
      initial={{ opacity: 0.05, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      className="flex flex-col gap-3 w-full items-center"
    >
      <Image src={GranaControlLogo} alt="GranaControl Logo" />
      <p className="text-white text-center mb-12">{description}</p>
    </motion.header>
  );
}
