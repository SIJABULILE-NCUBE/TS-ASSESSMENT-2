import type { Product } from "./01-generic-constraints.ts";

// Partial<Product> makes every field optional so I can send just the bit
// that's changing, like { price: 100 }, without resending the whole object
export function updateProduct(product: Product, changes: Partial<Product>): Product {
  return { ...product, ...changes };
}

// no point retyping id/name by hand when Pick already does exactly this
export type ProductPreview = Pick<Product, "id" | "name">;
export const preview: ProductPreview = { id: 1, name: "Mug" };

// a "new" product can't have an id yet, the server hands that out, so
// Omit<Product, "id"> is basically Product minus the field that isn't ours to set
export type NewProduct = Omit<Product, "id">;
export const draft: NewProduct = { name: "Pen", price: 15, inStock: true };

// just a name -> price lookup, Record<string, number> is the built-in
// way to say "object with string keys and number values"
export type PriceList = Record<string, number>;

export function buildPriceList(items: Product[]): PriceList {
  const list: PriceList = {};
  for (const item of items) {
    list[item.name] = item.price;
  }
  return list;
}

// @ts-expect-error id was omitted from NewProduct
export const badDraft: NewProduct = { id: 9, name: "Pen", price: 15, inStock: true };