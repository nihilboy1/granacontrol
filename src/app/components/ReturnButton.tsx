import { CaretLeft } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function ReturnButton() {
  const router = useRouter();
  return (
    <motion.button
      className="mt-[-0.5rem] sm:mt-0"
      onClick={() => {
        router.back();
      }}
      initial={{
        borderTop: "2px solid rgba(17, 17, 17, 0)",
      }}
      whileHover={{
        borderTop: "2px solid rgba(17, 17, 17, 1)",
      }}
    >
      <CaretLeft weight="fill" size={24} className="mt-1" />
    </motion.button>
  );
}
