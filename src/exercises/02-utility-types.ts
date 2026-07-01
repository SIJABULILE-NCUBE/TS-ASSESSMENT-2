import type { Product } from "./01-generic-constraints.ts";

export function updateProduct(product: Product, changes: Partial<Product>): Product {
  return { ...product, ...changes };
}

export type ProductPreview = Pick<Product, "id" | "name">;
export const preview: ProductPreview = { id: 1, name: "Mug" };

export type NewProduct = Omit<Product, "id">;
export const draft: NewProduct = { name: "Pen", price: 15, inStock: true };

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