"use client";

import { useRef } from "react";

import { useStore } from "@/libs/stores/store";

export default function StoreInitializer({ title, value }: { title: string; value: number }) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useStore.setState({ title, value });
    initialized.current = true;
  }
  return null;
}