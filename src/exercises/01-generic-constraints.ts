export interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

export function getField<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

export function withField<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
  return { ...obj, [key]: value };
}

// Resolves to the union of keys of T whose value type is number.
type NumericKeys<T> = {
  [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];

export function sumBy<T, K extends NumericKeys<T>>(items: T[], key: K): number {
  return items.reduce((total, item) => total + (item[key] as unknown as number), 0);
}

export const products: Product[] = [
  { id: 1, name: "Mug", price: 80, inStock: true },
  { id: 2, name: "Notebook", price: 45, inStock: false },
];

// @ts-expect-error "colour" is not a key of Product
getField(products[0], "colour");

// @ts-expect-error price is a number, not a string
withField(products[0], "price", "expensive");

// @ts-expect-error "name" is not a number-valued field
sumBy(products, "name");