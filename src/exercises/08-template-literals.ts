export type Entity = "user" | "order";
export type Act = "created" | "deleted";

export type EventName = `${Entity}:${Act}`;

export const ev: EventName = "order:created";
// @ts-expect-error not a valid entity:action pair
export const badEv: EventName = "user:updated";

export type RouteWithId<T extends string> = `/${T}/:id`;

export const r: RouteWithId<"users"> = "/users/:id";

export type Prefixed<T, P extends string> = {
  [K in keyof T as `${P}_${string & K}`]: T[K];
};

export const cfg: Prefixed<{ a: number; b: string }, "cfg"> = { cfg_a: 1, cfg_b: "x" };