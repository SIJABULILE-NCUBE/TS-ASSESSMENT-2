# TypeScript Advanced Assessment 2



## Overview



This repository contains my submission for the **Advanced TypeScript Assessment**.



The assessment focuses on designing robust and type-safe applications using advanced TypeScript concepts rather than simply using existing types. Throughout the assessment I applied strict typing principles to build maintainable, scalable, and safe code without relying on `any` or unsafe type assertions.



The project was completed using **Vite**, **React**, and **TypeScript** under strict compiler settings.



---



## Learning Objectives



The purpose of this assessment was to demonstrate an understanding of:



- Generic Constraints

- Generic Type Parameters

- `keyof`

- Indexed Access Types (`T[K]`)

- Utility Types

  - Partial

  - Pick

  - Omit

  - Record

- Custom Mapped Types

- Key Remapping

- Conditional Types

- `infer`

- `unknown`

- User Defined Type Guards

- Discriminated Unions

- Typed Reducers

- Exhaustiveness Checking using `never`

- Generic Result Types

- Async Type Safety

- Template Literal Types

- Function Overloads

- Building a fully typed Shopping Cart module



---



## Technologies Used



- TypeScript

- React

- Vite

- Node.js



---



## Project Structure



```

src

│

├── exercises

│   ├── 01-generic-constraints.ts

│   ├── 02-utility-types.ts

│   ├── 03-mapped-types.ts

│   ├── 04-conditional-types.ts

│   ├── 05-unknown-guards.ts

│   ├── 06-state-machine.ts

│   ├── 07-async-result.ts

│   ├── 08-template-literals.ts

│   ├── 09-overloads.ts

│   └── 10-capstone-cart.ts

│

├── tests

│   └── run-tests.ts

│

├── App.tsx

└── main.tsx

```



---



## Assessment Exercises



### Exercise 1 – Generic Constraints



Implemented generic functions using:



- Generic type parameters

- `keyof`

- Indexed access types

- Strongly typed getters and setters

- Numeric property constraints



---



### Exercise 2 – Utility Types



Applied built-in TypeScript utility types including:



- Partial

- Pick

- Omit

- Record



to safely manipulate product data.



---



### Exercise 3 – Mapped Types



Created custom mapped types from scratch including:



- ReadOnly

- Nullable

- Getter method generation

- Key remapping



---



### Exercise 4 – Conditional Types



Used conditional types together with `infer` to:



- Flatten array types

- Unwrap Promise types

- Remove nullable fields



---



### Exercise 5 – Unknown & Type Guards



Implemented runtime validation using:



- unknown

- Custom type guards

- Safe parsing

- Type narrowing



without using `any`.



---



### Exercise 6 – State Machine



Built a strongly typed reducer using:



- Discriminated unions

- Exhaustive switch statements

- `never` exhaustiveness checking



---



### Exercise 7 – Async Result Pattern



Implemented a reusable generic Result type for safer error handling.



Created helper functions for:



- Success results

- Error results

- Safe division

- Async data loading



---



### Exercise 8 – Template Literal Types



Created strongly typed string patterns including:



- Event names

- Dynamic routes

- Prefixed object keys



---



### Exercise 9 – Function Overloads



Implemented multiple overload signatures while maintaining a single implementation.



---



### Exercise 10 – Shopping Cart



Built a fully typed shopping cart module featuring:



- Cart items

- Immutable updates

- Adding products

- Removing products

- Calculating subtotals

- Applying discounts

- Currency type safety



---



## Getting Started





Install dependencies



```bash

npm install

```



Run the development server



```bash

npm run dev

```



Run TypeScript type checking



```bash

npm run typecheck

```



Run the test suite



```bash

npm test

```



---



## Assessment Requirements



The project follows the assessment rules:



- No `any`

- No `as any`

- No `@ts-ignore`

- Strict TypeScript mode enabled

- All tests passing

- Zero type errors



---



## Loom Demonstration



Loom Video:





```

https://www.loom.com/share/f6eab9b5436d476ea645801f7953c426

```



## GITHUB LINK



```



https://github.com/SIJABULILE-NCUBE/TS-ASSESSMENT-2



```



---



## Write-up



The required assessment write-up can be found in:



```

WRITEUP.md

```



This document answers the required reflection questions on:



- Generic Constraints

- Mapped Types vs Utility Types

- unknown vs any

- Exhaustiveness checking using never



---



## Author



**Sijabulile Ncube**

**Assessment:** TypeScript Basics Assessment

**Completion Date:** 2 July 2026



---