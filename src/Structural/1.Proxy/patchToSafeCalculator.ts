import { StackCalculator } from "./StackCalculator";

export function patchToSafeCalculator(calculator: StackCalculator) {
  const divideOrig = calculator.divide;
  calculator.divide = () => {
    // 추가 검증 로직
    const divisor = calculator.peek()
    if (divisor === 0) {
      throw new Error('Division by 0')
    }
    return divideOrig.apply(calculator)
  }

  return calculator
}

const calculator = new StackCalculator();
const safeCalculator = patchToSafeCalculator(calculator);

calculator.push(3)
calculator.push(2)
console.log(calculator.multiply()) // 3 * 2 = 6

safeCalculator.push(2)
console.log(safeCalculator.multiply()) // 6 * 2 = 12

calculator.push(0)
console.log(calculator.divide()) // 12 / 0 = Infinity

safeCalculator.clear()
safeCalculator.push(4)
safeCalculator.push(0)
console.log(safeCalculator.divide()) // error