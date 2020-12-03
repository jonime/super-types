# super-types

Really super types for typescript

- [super-types](#super-types)
  - [Installation](#installation)
  - [Types](#types)
    - [Array related](#array-related)
      - [`ArrayElementType`](#arrayelementtype)
    - [Date related](#date-related)
      - [`ISODateString`](#isodatestring)
  - [License](#license)

---

## Installation

```bash
# NPM
npm install super-types

# YARN
yarn add super-types
```

---

## Types

### Array related

#### `ArrayElementType`

This is used to get the type of the array element from the array. Example:

```ts
const array = [1, 2, 3];
type TypeOfArrayElement = ArrayElementType<typeof array>;
```

---

### Date related

#### `ISODateString`

This is used to add type to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date. Example:

```ts
const date: ISODateString = '2020-12-03';
```

---

## License

[MIT License](/LICENSE)
