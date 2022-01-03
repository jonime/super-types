type LeapYear =
  | '1904'
  | '1908'
  | '1912'
  | '1916'
  | '1920'
  | '1924'
  | '1928'
  | '1932'
  | '1936'
  | '1940'
  | '1944'
  | '1948'
  | '1952'
  | '1956'
  | '1960'
  | '1964'
  | '1968'
  | '1972'
  | '1976'
  | '1980'
  | '1984'
  | '1988'
  | '1992'
  | '1996'
  | '2000'
  | '2004'
  | '2008'
  | '2012'
  | '2016'
  | '2020'
  | '2024'
  | '2028'
  | '2032'
  | '2036'
  | '2040'
  | '2044'
  | '2048'
  | '2052'
  | '2056'
  | '2060'
  | '2064'
  | '2068'
  | '2072'
  | '2076'
  | '2080'
  | '2084'
  | '2088'
  | '2092'
  | '2096';

type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type Century = '19' | '20';
type Year = `${Century}${Digit}${Digit}`;

type NormalYear = Exclude<Year, LeapYear>;

type Month =
  | '01'
  | '02'
  | '03'
  | '04'
  | '05'
  | '06'
  | '07'
  | '08'
  | '09'
  | '10'
  | '11'
  | '12';

type Day =
  | '01'
  | '02'
  | '03'
  | '04'
  | '05'
  | '06'
  | '07'
  | '08'
  | '09'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'
  | '23'
  | '24'
  | '25'
  | '26'
  | '27'
  | '28'
  | '29'
  | '30'
  | '31';

type DayOf30DayMonth = Exclude<Day, '31'>;
type DayOf29DayMonth = Exclude<DayOf30DayMonth, '30'>;
type DayOf28DayMonth = Exclude<DayOf29DayMonth, '29'>;

type MonthWith31Days = '01' | '03' | '05' | '07' | '08' | '10' | '12';
type MonthWith30Days = '04' | '06' | '09' | '11';

type MonthAndDateWith31Days = `${MonthWith31Days}-${Day}`;
type MonthAndDateWith30Days = `${MonthWith30Days}-${DayOf30DayMonth}`;

type MonthAndDayOnNormalYear =
  | MonthAndDateWith31Days
  | MonthAndDateWith30Days
  | `02-${DayOf28DayMonth}`;

type MonthAndDayOnLeapYear =
  | MonthAndDateWith31Days
  | MonthAndDateWith30Days
  | `02-${DayOf29DayMonth}`;

export type ISODateString =
  | `${NormalYear}-${MonthAndDayOnNormalYear}`
  | `${LeapYear}-${MonthAndDayOnLeapYear}`;
