import { create } from "zustand";

export const useStore = create<{
  title: string;
  value: number;
}>((set) => ({
  title: "",
  value: 0,
}))