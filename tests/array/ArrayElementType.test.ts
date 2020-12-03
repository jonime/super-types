import { ArrayElementType } from 'types/array/ArrayElementType';

const array = [1, 2, 3];

type ShouldBeNumber = ArrayElementType<typeof array>;

const number: ShouldBeNumber = 1;

// @ts-expect-error
const notNumber: ShouldBeNumber = 'test';
