export interface ITimetable<TLesson, TSchedule> {
  readonly lessons: TLesson[][];
  /**
   * Reads given schedule into the timetable
   * @param schedule the schedule as given by an API
   * @returns the this object, for optional chaining
   * @example
   * const timetable = new FullTimetable().fromIscool(Schedule);
   */
  fromSchedule(schedule: TSchedule): ITimetable<TLesson, TSchedule>;
}
