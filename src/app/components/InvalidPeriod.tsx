"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function InvalidPeriod() {
  const router = useRouter();
  useEffect(() => {
    router.push("/periodsdashboard");
  }, []);
  return <></>;
}
