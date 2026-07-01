export type FetchState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };

// discriminated union on "type" - this is what lets the switch below
// narrow action down to exactly the right shape in each case
export type Action<T> =
  | { type: "FETCH" }
  | { type: "RESOLVE"; data: T }
  | { type: "REJECT"; error: string }
  | { type: "RESET" };

export function reducer<T>(_state: FetchState<T>, action: Action<T>): FetchState<T> {
  switch (action.type) {
    case "FETCH":
      return { status: "loading" };
    case "RESOLVE":
      // inside this case action is narrowed to just the RESOLVE branch
      // so action.data actually exists and is typed T, not any of the others
      return { status: "success", data: action.data };
    case "REJECT":
      return { status: "error", message: action.error };
    case "RESET":
      return { status: "idle" };
    default: {
      // this is the exhaustiveness trick - by the time we get here every
      // case should already be handled above, so action should have
      // narrowed all the way down to never. if someone adds a new action
      // type later and forgets to handle it above, this line stops
      // compiling because action would no longer actually be never.
      // that's basically a compile-time reminder to go add the case.
      const _exhaustive: never = action;
      throw new Error(`Unhandled action: ${JSON.stringify(_exhaustive)}`);
    }
  }
}