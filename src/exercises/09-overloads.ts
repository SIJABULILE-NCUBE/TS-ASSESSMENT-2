export function parseInput(value: string): string[];
export function parseInput(value: number): number[];
export function parseInput(value: string | number): string[] | number[] {
  if (typeof value === "string") {
    return value.split(",");
  }
  return [value];
}

export const a = parseInput("x,y,z");
export const b = parseInput(7);

// @ts-expect-error boolean is not an accepted input
parseInput(true);