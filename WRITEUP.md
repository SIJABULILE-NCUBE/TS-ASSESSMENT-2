# WRITEUP

## TypeScript Assessment 2 – Reflection

### 1. What does a generic constraint (`K extends keyof T`) buy you over `any`?

A generic constraint makes the code type-safe by ensuring that only valid properties of an object can be accessed. Using `K extends keyof T` means the key must exist on the object, and TypeScript can correctly infer the type of the value being returned. If `any` were used instead, the compiler would allow invalid property names and incorrect data types, increasing the risk of runtime errors. Generic constraints therefore provide better autocomplete, stronger compile-time checking, and more reliable code.

---

### 2. When would you use a mapped type vs. a utility type like `Pick`?

I would use a utility type like `Pick` when I only need a predefined transformation, such as selecting a few existing properties from a type. It is quick, readable, and already built into TypeScript.

I would use a mapped type when I need to create my own custom type transformation. Mapped types are more flexible because they allow me to modify every property in a type, change property modifiers such as `readonly`, allow `null`, or even rename keys using key remapping.

---

### 3. What is the difference between `unknown` and `any`, and why is a type guard safer than a cast?

Although both `unknown` and `any` can hold any value, they behave very differently. The `any` type disables TypeScript's type checking, allowing any operation to be performed without compiler errors. While this is convenient, it can hide bugs and make the code less reliable.

The `unknown` type is safer because TypeScript requires me to check or narrow the type before I can use the value. A type guard performs runtime checks to verify what the value actually is before accessing its properties. This is much safer than using a type cast because a cast simply tells the compiler to trust me, even if the value is not actually of that type.

---

### 4. How does the `never` exhaustiveness check in the reducer protect you?

The `never` exhaustiveness check ensures that every possible action in a discriminated union is handled inside the reducer. If a new action is added later but the reducer is not updated, TypeScript reports a compile-time error because the default case can no longer be assigned to `never`. This helps prevent missing cases, improves maintainability, and makes the reducer more reliable as the application grows.

---

## Reflection

This assessment strengthened my understanding of advanced TypeScript features beyond the basics. It challenged me to think carefully about type safety, generic programming, and designing reusable types rather than simply making the compiler happy. Working through the exercises gave me a better understanding of how advanced typing can reduce bugs, improve code quality, and make applications easier to maintain.