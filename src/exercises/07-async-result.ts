export type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };

export function ok<T>(value: T): Result<T, never> {
  return { ok: true, value };
}
export function err<E>(error: E): Result<never, E> {
  return { ok: false, error };
}

export function divide(a: number, b: number): Result<number, string> {
  if (b === 0) {
    return err("division by zero");
  }
  return ok(a / b);
}

export async function loadOrder(id: number): Promise<Result<{ id: number; total: number }, string>> {
  if (id > 0) {
    return ok({ id, total: id * 10 });
  }
  return err("invalid id");
}