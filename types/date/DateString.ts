type LeapYear =
  | "1904"
  | "1908"
  | "1912"
  | "1916"
  | "1920"
  | "1924"
  | "1928"
  | "1932"
  | "1936"
  | "1940"
  | "1944"
  | "1948"
  | "1952"
  | "1956"
  | "1960"
  | "1964"
  | "1968"
  | "1972"
  | "1976"
  | "1980"
  | "1984"
  | "1988"
  | "1992"
  | "1996"
  | "2000"
  | "2004"
  | "2008"
  | "2012"
  | "2016"
  | "2020"
  | "2024"
  | "2028"
  | "2032"
  | "2036"
  | "2040"
  | "2044"
  | "2048"
  | "2052"
  | "2056"
  | "2060"
  | "2064"
  | "2068"
  | "2072"
  | "2076"
  | "2080"
  | "2084"
  | "2088"
  | "2092"
  | "2096";

type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type Century = "19" | "20";
type Year = `${Century}${Digit}${Digit}`;

type NormalYear = Exclude<Year, LeapYear>

type Month =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12";

type Day =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "20"
  | "21"
  | "22"
  | "23"
  | "24"
  | "25"
  | "26"
  | "27"
  | "28"
  | "29"
  | "30"
  | "31";

type Day30 = Exclude<Day, "31">;
type Day29 = Exclude<Day30, "30">;
type Day28 = Exclude<Day29, "29">;

type Month31 = "01" | "03" | "05" | "07" | "08" | "10" | "12";
type Month30 = "04" | "06" | "09" | "11";

type MonthWithDay31 = `${Month31}-${Day}`;
type MonthWithDay30 = `${Month30}-${Day30}`;

type MonthWithDayOnNormalYear = MonthWithDay30 | MonthWithDay31 | `02-${Day28}`;
type MonthWithDayOnLeapYear = MonthWithDay30 | MonthWithDay31 | `02-${Day29}`;

export type DateString = `${NormalYear}-${MonthWithDayOnNormalYear}` | `${LeapYear}-${MonthWithDayOnLeapYear}`;
