import { Plus } from "@phosphor-icons/react/dist/ssr";

export function AddItemButton() {
  return (
    <button className="bg-background p-[0.8rem] rounded-full shadow-lg my-5">
      <Plus color="white" size={28} weight="bold" />
    </button>
  );
}
