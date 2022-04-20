/*
 * Represents the methods we want of a class lookup to have
 */
export interface IClassLookup {
  // getFormattedGradeName(grade: number): string
  classIds: number[][];
  grades: number[];
}
