export type FetchState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };

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
      return { status: "success", data: action.data };
    case "REJECT":
      return { status: "error", message: action.error };
    case "RESET":
      return { status: "idle" };
    default: {
      const _exhaustive: never = action;
      throw new Error(`Unhandled action: ${JSON.stringify(_exhaustive)}`);
    }
  }
}