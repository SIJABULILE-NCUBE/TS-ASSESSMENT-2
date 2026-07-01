// discriminated union again, this time on ok instead of a "type" string.
// checking result.ok narrows to either the value branch or the error branch
export type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };

// never for the error side of ok() because if it succeeded there's no
// error to speak of - same idea in err() but flipped for the value side
export function ok<T>(value: T): Result<T, never> {
  return { ok: true, value };
}
export function err<E>(error: E): Result<never, E> {
  return { ok: false, error };
}

// this is why Result is nice - dividing by zero isn't an exception that
// crashes the whole call stack, it's just a normal return value the
// caller has to check for, same as the success case
export function divide(a: number, b: number): Result<number, string> {
  if (b === 0) {
    return err("division by zero");
  }
  return ok(a / b);
}

// async function but the return type is still a Result wrapped in a
// Promise - awaiting this gives you either the ok branch or the err
// branch, never a thrown exception for the "bad id" case
export async function loadOrder(id: number): Promise<Result<{ id: number; total: number }, string>> {
  if (id > 0) {
    return ok({ id, total: id * 10 });
  }
  return err("invalid id");
}