import { useContext } from "react";

import AppState from "@app/state/context";

export default function useAppState() {
  return useContext(AppState);
}
