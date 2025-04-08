import { Plus } from "@phosphor-icons/react/dist/ssr";

export function AddItemButton() {
  return (
    <button className="relative group bg-base hover:bg-background hover:shadow-xl transition-all p-[0.8rem] rounded-full my-8 shadow-sm  ">
      <Plus color="white" size={28} weight="bold" />
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-black text-background bg-white rounded  group-hover:delay-1000 delay-0 invisible group-hover:visible">
        ADICIONAR
      </span>
    </button>
  );
}
