import { ISODateString } from 'types/date/ISODateString'

const valid: ISODateString = '2020-12-03';

const has31Days: ISODateString = '2020-01-31';

// @ts-expect-error
const doesNotHave31Days: ISODateString = '2020-04-31';

// @ts-expect-error
const invalidMonth: ISODateString = '2020-13-03';

// @ts-expect-error
const invalidDay: ISODateString = '2020-05-35';

// @ts-expect-error
const invalidFormat: ISODateString = '1.1.2020';

// @ts-expect-error
const notLeapYear: ISODateString = '2019-02-29';

const leapYear: ISODateString = '2020-02-29';