"use client";

import Image from "next/image";
import GoogleLogo from "../../../public/google.svg";
import { motion } from "framer-motion";

export function ConnectWithGoogle() {
  return (
    <>
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
          width: "16rem",
          scale: 1.01,
          fontWeight: "bold",
        }}
        className="text-white w-fit mx-auto flex flex-col items-center mt-[3rem] "
      >
        <span className="w-[15rem]">Ou entre com sua conta Google</span>
      </motion.button>
      <motion.div
        initial={{
          opacity: 0.05,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        className="mt-1 flex self-center"
      >
        <Image src={GoogleLogo} alt="Google Logo" />
      </motion.div>
    </>
  );
}
