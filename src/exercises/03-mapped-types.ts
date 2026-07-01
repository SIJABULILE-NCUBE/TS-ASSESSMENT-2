export interface Settings {
  theme: string;
  fontSize: number;
  notifications: boolean;
}

export type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

export const locked: ReadOnly<Settings> = { theme: "dark", fontSize: 14, notifications: true };
// @ts-expect-error every field is readonly
locked.theme = "light";

export type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

export const partial: Nullable<Settings> = { theme: null, fontSize: 14, notifications: null };

export type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

export const settingsGetters: Getters<Settings> = {
  getTheme: () => "dark",
  getFontSize: () => 14,
  getNotifications: () => true,
};