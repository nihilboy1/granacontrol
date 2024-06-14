import { User } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import Link from "next/link";

export function ProfileButton() {
  return (
    <Link href="/profile">
      <motion.button
        initial={{
          borderTop: "2px solid rgba(17, 17, 17, 0)",
        }}
        whileHover={{
          borderTop: "2px solid rgba(17, 17, 17, 1)",
        }}
      >
        <User weight="fill" size={24} className="mt-1" />
      </motion.button>
    </Link>
  );
}
