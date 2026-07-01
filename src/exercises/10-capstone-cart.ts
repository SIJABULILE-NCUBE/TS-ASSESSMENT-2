export type CartItem = {
  productId: number;
  name: string;
  unitPrice: number;
  quantity: number;
};

export type Cart = {
  items: CartItem[];
  currency: "ZAR" | "USD";
};

export function addItem(cart: Cart, item: CartItem): Cart {
  const existing = cart.items.find((i) => i.productId === item.productId);
  if (existing) {
    return {
      ...cart,
      items: cart.items.map((i) =>
        i.productId === item.productId
          ? { ...i, quantity: i.quantity + item.quantity }
          : i
      ),
    };
  }
  return { ...cart, items: [...cart.items, item] };
}

export function removeItem(cart: Cart, productId: number): Cart {
  return { ...cart, items: cart.items.filter((i) => i.productId !== productId) };
}

export function subtotal(cart: Cart): number {
  return cart.items.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
}

export function applyDiscount(cart: Cart, rate: number): number {
  if (rate < 0 || rate > 1) {
    throw new Error("discount rate must be between 0 and 1");
  }
  return subtotal(cart) * (1 - rate);
}

export const cart: Cart = {
  currency: "ZAR",
  items: [
    { productId: 1, name: "Mug", unitPrice: 80, quantity: 2 },
    { productId: 2, name: "Notebook", unitPrice: 45, quantity: 1 },
  ],
};

// @ts-expect-error "EUR" is not a supported currency
export const badCart: Cart = { currency: "EUR", items: [] };