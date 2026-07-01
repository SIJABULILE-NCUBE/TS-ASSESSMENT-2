export interface Settings {
  theme: string;
  fontSize: number;
  notifications: boolean;
}

// had to write this myself instead of using the built-in Readonly<T>.
// same idea though - loop over every key with [K in keyof T] and just
// stick readonly in front of the value type
export type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

export const locked: ReadOnly<Settings> = { theme: "dark", fontSize: 14, notifications: true };
// @ts-expect-error every field is readonly
locked.theme = "light";

// same pattern as ReadOnly but instead of changing the modifier I'm
// changing the value type itself, union each field with null
export type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

export const partial: Nullable<Settings> = { theme: null, fontSize: 14, notifications: null };

// this is the one that actually renames the keys, not just their types.
// the `as` after K in keyof T lets me remap the key name instead of
// keeping it the same - so "theme" becomes "getTheme". Capitalize<string & K>
// is needed because K on its own could technically be a symbol/number key
// too, the "string &" bit narrows it down to just the string ones before
// capitalizing the first letter.
export type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

export const settingsGetters: Getters<Settings> = {
  getTheme: () => "dark",
  getFontSize: () => 14,
  getNotifications: () => true,
};