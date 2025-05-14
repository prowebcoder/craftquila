import { createContext } from "react";

import { AppState, Action } from "@app/types";

export const initialState: AppState = {
  modal: false,
  cart: {
    items: [],
    total: 0,
  },
  dispatch: (action: Action) => {},
};

const AppState = createContext<AppState>(initialState);

export default AppState;
