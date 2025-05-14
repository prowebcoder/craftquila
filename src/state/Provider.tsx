"use client";

import { useReducer, ReactNode } from "react";

import AppState, { initialState } from "@app/state/context";

import reducer from "@app/state/reducer";

export default function AppStateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [appState, dispatch] = useReducer(reducer, initialState);

  return (
    <AppState.Provider value={{ ...appState, dispatch }}>
      {children}
    </AppState.Provider>
  );
}
