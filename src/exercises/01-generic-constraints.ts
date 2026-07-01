export interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

// K extends keyof T means key has to actually be a key on whatever object
// gets passed in, and T[K] means the return type follows automatically -
// no need to write separate overloads for price vs name vs whatever.
export function getField<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// same idea as getField but for setting a value instead of reading one.
// value: T[K] is the important bit - it ties the value type to whatever
// field you picked, so you can't accidentally set price to a string.
// spreading into a new object instead of obj[key] = value keeps it pure.
export function withField<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
  return { ...obj, [key]: value };
}

// this one took me a while to get. I basically need "only the keys of T
// whose value is a number" so sumBy(products, "name") can't even compile.
// the mapped type below walks every key - if the value at that key extends
// number it keeps the key name, otherwise it becomes never. then indexing
// with [keyof T] at the end squashes it down into one union of just the
// numeric keys (the never ones just disappear from the union).
type NumericKeys<T> = {
  [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];

export function sumBy<T, K extends NumericKeys<T>>(items: T[], key: K): number {
  // the cast here is just because TS can't fully prove item[key] is a number
  // when key is a generic - but since K is constrained to NumericKeys<T> we
  // already know it is, so this isn't an "any" escape hatch, just closing
  // a gap the compiler can't work out on its own.
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