import { useStore } from "@/libs/stores/store";

export default function ZustandSSRView() {
  return (
    <p className="">
      SSR: {useStore.getState().title}&nbsp;
    </p>
  )
}