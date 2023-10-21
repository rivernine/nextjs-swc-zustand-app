"use client";

import { useStore } from "@/libs/stores/store";

export default function ZustandCSRView() {
  const title = useStore((state) => state.title)
  return (
    <p className="">
      CSR: {title}&nbsp;
    </p>
  )
}