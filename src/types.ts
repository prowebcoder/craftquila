export enum Alcohol {
  BLANCO35 = "Blanco 35%",
  BLANCO37 = "Blanco 37%",
  BLANCO40 = "Blanco 40%",
  BLANCO42 = "Blanco 42%",
}

export enum Additive {
  AGAVE = "Agave",
  VANILLA = "Vanilla",
  ORANGE = "Orange",
  POISON = "Poison",
}

export enum Bottle {
  SHORT = "Short",
  CYLINDER = "Cylinder",
  CIRCLE = "Circle",
  TALL = "Tall",
}

export interface CartItem {
  alcohol: Alcohol;
  bottle: Bottle;
  additive: Additive;
  price: number;
  qty: number;
}

interface Cart {
  items: CartItem[];
  total: number;
}

export interface AppState {
  modal: boolean;
  cart: Cart;
  dispatch(action: Action): void;
}

type ActionTypes = "MODAL_TOGGLE" | "CART_ADD_ITEM";

export interface Action {
  type: ActionTypes;
  payload?: any;
}

export interface CartItem {
  alcohol: Alcohol;
  bottle: Bottle;
  additive: Additive;
  price: number;
  qty: number;
  label: string; // Add this
  paymentMethod: string; // Add this
  labelPosition: { x: number; y: number };
}
