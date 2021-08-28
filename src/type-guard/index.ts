export function isNumber(value: number | undefined): value is number {
  return typeof value === "number";
}