import { AppState, Action } from "@app/types";

export default function reducer(state: AppState, action: Action) {
  switch (action.type) {
    case "MODAL_TOGGLE": {
      return {
        ...state,
        modal: !state.modal,
      };
    }
  }

  throw Error("Unknown action: " + action.type);
}
