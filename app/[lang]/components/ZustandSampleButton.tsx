"use client";

import { useStore } from "@/libs/stores/store";

export default function ZustandSampleButton() {
  return (
    <button
      type="button"
      className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      onClick={() => {
        useStore.setState((state) => ({
          title: state.title + 'append',
        }));
      }}
    >
      Change store
    </button>
  )
}