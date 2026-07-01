// if T looks like an array, infer grabs whatever U is inside it and gives
// that back. if it's not an array at all, just return T unchanged
export type Flatten<T> = T extends (infer U)[] ? U : T;

export const f1: Flatten<string[]> = "hello";   // must be string
export const f2: Flatten<number> = 42;          // must be number

// exact same trick as Flatten, just checking for Promise<U> instead of U[]
export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

export const u1: UnwrapPromise<Promise<boolean>> = true;   // boolean
export const u2: UnwrapPromise<string> = "x";              // string

// mapped type + the built-in NonNullable together - loop every key,
// strip null/undefined off each one's type
export type NonNullableFields<T> = {
  [K in keyof T]: NonNullable<T[K]>;
};

type Raw = { a: string | null; b: number | undefined };
export const clean: NonNullableFields<Raw> = { a: "ok", b: 5 };
// @ts-expect-error a can no longer be null
export const bad: NonNullableFields<Raw> = { a: null, b: 5 };