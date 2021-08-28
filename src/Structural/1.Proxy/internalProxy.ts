import { StackCalculator } from "./StackCalculator";

export const safeCalculatorHandler = {
  get: (target: StackCalculator, property: keyof StackCalculator) => {
    if (property === "divide") {
      // 프록시 된 함수
      return function () {
        const divisor = target.peek();
        if (divisor === 0) {
          throw new Error("Division by 0");
        }
        return target.divide();
      };
    }
    // 위임된 함수들과 속성
    return target[property];
  },
};

const calculator = new StackCalculator();
const safeCalculator = new Proxy(calculator, safeCalculatorHandler);

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
