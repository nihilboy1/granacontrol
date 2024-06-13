"use client";
import { motion } from "framer-motion";
import { Input } from "./Input";
import { Envelope, Password } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export function LoginForm() {
  return (
    <form action="" className="gap-2 flex flex-col">
      <Input Icon={Envelope} placeholder="Informe seu Email" />
      <Input Icon={Password} placeholder="Informe sua Senha" />
      <motion.button
        initial={{ opacity: 0.05, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.2,
            ease: "easeOut",
          },
        }}
        whileHover={{
          scale: 1.02,
          transition: {
            duration: 0.2,
          },
        }}
        className="bg-primary font-bold p-4 rounded-md mt-12 hover:"
      >
        Entrar
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
          transition: {
            duration: 0.2,
            ease: "easeOut",
          },
        }}
        whileHover={{
          borderBottom: "1px solid #FFFFFF",
          width: "18rem",
          scale: 1.01,
          transition: {
            duration: 0.2,
          },
        }}
        className="text-white w-fit mx-auto flex flex-col items-center "
      >
        <Link className="w-[19rem]" href="/subscribe">
          Clique aqui para{" "}
          <strong className="text-primary ">Criar uma Conta</strong>
        </Link>
      </motion.button>
    </form>
  );
}
