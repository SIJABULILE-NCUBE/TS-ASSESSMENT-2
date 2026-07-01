// the two lines above are the actual public overloads - these are what
// callers see, so parseInput("x") shows up as string[] and parseInput(7)
// shows up as number[], not some combined union type
export function parseInput(value: string): string[];
export function parseInput(value: number): number[];
// this last one is the real implementation, it has to be compatible with
// both overloads above which is why the param is string | number
export function parseInput(value: string | number): string[] | number[] {
  if (typeof value === "string") {
    return value.split(",");
  }
  return [value];
}

export const a = parseInput("x,y,z");   // string[]
export const b = parseInput(7);         // number[]

// @ts-expect-error boolean is not an accepted input
parseInput(true);