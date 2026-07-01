export type Entity = "user" | "order";
export type Act = "created" | "deleted";

// template literal type over two unions - TS multiplies them out into
// every combination, so this is actually 4 possible strings even though
// it only looks like one type
export type EventName = `${Entity}:${Act}`;

export const ev: EventName = "order:created";
// @ts-expect-error not a valid entity:action pair
export const badEv: EventName = "user:updated";

// same template literal idea but with a generic instead of two fixed
// unions - T extends string just means whatever gets passed in has to
// actually be usable inside the template
export type RouteWithId<T extends string> = `/${T}/:id`;

export const r: RouteWithId<"users"> = "/users/:id";

// combines everything from exercise 3 and this file - mapped type, key
// remapping with as, and a template literal all in one. string & K again
// just makes sure K is treated as a string before it goes in the template
export type Prefixed<T, P extends string> = {
  [K in keyof T as `${P}_${string & K}`]: T[K];
};

export const cfg: Prefixed<{ a: number; b: string }, "cfg"> = { cfg_a: 1, cfg_b: "x" };