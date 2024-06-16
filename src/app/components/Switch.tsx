import { motion } from "framer-motion";

interface SwitchProps {
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
}

export function Switch({ isChecked, setIsChecked }: SwitchProps) {
  return (
    <motion.div
      onClick={() => {
        setIsChecked(!isChecked);
      }}
      className={`transition-all w-[3.2rem] flex rounded-full bg-white p-[0.2rem] shadow-lg cursor-pointer `}
    >
      <div
        className={`rounded-full bg-background ${
          !isChecked ? "bg-opacity-50 ml-0" : "ml-auto"
        }  p-[0.4rem] bg-background`}
      />
    </motion.div>
  );
}
