const DAYS = [0, 1, 2, 3, 4, 5, 6] as const;
const HOURS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;

export type DayOfWeek = typeof DAYS[number];
export type HourOfDay = typeof HOURS[number];

export const DAYS_IN_WEEK = DAYS.length;
export const HOURS_OF_DAY = HOURS.length;
