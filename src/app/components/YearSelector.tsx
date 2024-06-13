"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export function YearSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("ANO");

  useEffect(() => {
    const handleStyleChanges = () => {
      if (
        document.documentElement.style.overflow === "hidden" ||
        document.documentElement.style.paddingRight === "15px"
      ) {
        document.documentElement.style.overflow = "";
        document.documentElement.style.paddingRight = "";
      }
    };

    const observer = new MutationObserver(handleStyleChanges);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Menu>
      {({ open }) => {
        if (isOpen !== open) {
          setIsOpen(open);
        }

        return (
          <>
            <MenuButton className="w-[5rem] bg-white tracking-widest shadow-lg text-background flex justify-between items-center gap-1 rounded-md py-1 px-2 font-semibold ">
              {selectedYear}
              <ChevronDownIcon
                className={`size-4 fill-background transition-transform duration-200 ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              />
            </MenuButton>
            <Transition
              enter="transition ease-out duration-75"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <MenuItems
                anchor="bottom end"
                className="bg-white mt-2 origin-top-right rounded-xl p-1 shadow-lg w-[5rem] "
              >
                <MenuItem>
                  <button
                    className="hover:bg-primary hover:font-bold text-center w-full rounded-lg py-1.5 px-3"
                    onClick={() => setSelectedYear("2023")}
                  >
                    2023
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    className="hover:bg-primary hover:font-bold text-center w-full rounded-lg py-1.5 px-3"
                    onClick={() => setSelectedYear("2024")}
                  >
                    2024
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    className="hover:bg-primary hover:font-bold text-center w-full rounded-lg py-1.5 px-3"
                    onClick={() => setSelectedYear("2025")}
                  >
                    2025
                  </button>
                </MenuItem>
              </MenuItems>
            </Transition>
          </>
        );
      }}
    </Menu>
  );
}
