/**
 * Represents a timetable that is built from a schedule of another type
 */
export interface ITimetable<TLesson, TSchedule> {
  readonly lessons: TLesson[][];
  /**
   * Reads given schedule into the timetable
   * @param schedule the schedule as given by an API
   * @returns the this object, for optional chaining
   * @example
   * const timetable = new Timetabke().fromSchedule(Schedule);
   */
  fromSchedule(schedule: TSchedule): this;
}
