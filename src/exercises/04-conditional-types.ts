export type Flatten<T> = T extends (infer U)[] ? U : T;

export const f1: Flatten<string[]> = "hello";
export const f2: Flatten<number> = 42;

export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

export const u1: UnwrapPromise<Promise<boolean>> = true;
export const u2: UnwrapPromise<string> = "x";

export type NonNullableFields<T> = {
  [K in keyof T]: NonNullable<T[K]>;
};

type Raw = { a: string | null; b: number | undefined };
export const clean: NonNullableFields<Raw> = { a: "ok", b: 5 };
// @ts-expect-error a can no longer be null
export const bad: NonNullableFields<Raw> = { a: null, b: 5 };