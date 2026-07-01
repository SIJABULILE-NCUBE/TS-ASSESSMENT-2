export interface User {
  id: number;
  email: string;
}

// value is User in the return type is what actually makes this a type
// guard and not just a regular boolean function - wherever this gets
// called inside an if, TS narrows value to User in that branch for me.
export function isUser(value: unknown): value is User {
  // null check has to be separate because typeof null is "object" too,
  // which always catches me out
  if (typeof value !== "object" || value === null) {
    return false;
  }
  // this cast just lets me read .id/.email off something unknown so I can
  // check their types below - nothing is trusted until the return line
  // actually confirms it, so it's not the same as casting straight to User
  const candidate = value as Record<string, unknown>;
  return typeof candidate.id === "number" && typeof candidate.email === "string";
}

// reusing isUser here instead of duplicating the checks - if it passes,
// TS already knows value is a User in this branch because of the guard
export function parseUser(value: unknown): User | null {
  return isUser(value) ? value : null;
}

export function toInt(value: string | number): number {
  // already a number, nothing to do
  if (typeof value === "number") {
    return value;
  }
  // must be a string at this point since that's the only other option
  // in the union, so Number() on it and check it actually parsed
  const parsed = Number(value);
  if (Number.isNaN(parsed)) {
    throw new Error(`"${value}" is not a valid number`);
  }
  return parsed;
}

export const sample: unknown = { id: 1, email: "a@b.com" };