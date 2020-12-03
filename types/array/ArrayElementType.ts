export type ArrayElementType<T extends unknown[]> = T extends Array<
  infer ElementType
>
  ? ElementType
  : never;
