# super-types

Really super types for typescript

## Installation

```bash
# NPM
npm install super-types

# YARN
yarn add super-types
```

---

# Table of Contents

## Array

- [`ArrayElementType`](#arrayElementType)

## Date

- [`ISODateString`](#isoDateString)

---

### `ArrayElementType`

This is used to get the type of the array element from the array. Example:

```ts
const array = [1, 2, 3];
type TypeOfArrayElement = ArrayElementType<typeof array>;
```

### `ISODateString`

This is used to add type to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date. Example:

```ts
const date: ISODateString = '2020-12-03';
```

---

## License

[MIT License](/LICENSE)
