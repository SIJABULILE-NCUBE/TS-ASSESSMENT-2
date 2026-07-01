export interface User {
  id: number;
  email: string;
}

export function isUser(value: unknown): value is User {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const candidate = value as Record<string, unknown>;
  return typeof candidate.id === "number" && typeof candidate.email === "string";
}

export function parseUser(value: unknown): User | null {
  return isUser(value) ? value : null;
}

export function toInt(value: string | number): number {
  if (typeof value === "number") {
    return value;
  }
  const parsed = Number(value);
  if (Number.isNaN(parsed)) {
    throw new Error(`"${value}" is not a valid number`);
  }
  return parsed;
}

export const sample: unknown = { id: 1, email: "a@b.com" };