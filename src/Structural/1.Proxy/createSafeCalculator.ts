import { StackCalculator } from "./StackCalculator";

// 객체 리터럴과 팩토리 함수를 이용한 프록시 패턴
export function createSafeCalculator(
  calculator: StackCalculator
): { [K in keyof StackCalculator]: StackCalculator[K] } {
  return {
    // 프록시 함수
    divide() {
      const divisor = calculator.peek();
      if (divisor === 0) {
        throw new Error("Division by 0");
      }
      return calculator.divide();
    },
    // 위임된 함수들
    isEmpty() {
      return calculator.isEmpty();
    },
    push(value) {
      return calculator.push(value);
    },
    pop() {
      return calculator.pop();
    },
    peek() {
      return calculator.peek();
    },
    clear() {
      return calculator.clear();
    },
    multiply() {
      return calculator.multiply();
    },
  };
}

const calculator = new StackCalculator();
const safeCalculator = createSafeCalculator(calculator);

calculator.push(3);
calculator.push(2);
console.log(calculator.multiply()); // 3 * 2 = 6

safeCalculator.push(2);
console.log(safeCalculator.multiply()); // 6 * 2 = 12

calculator.push(0);
console.log(calculator.divide()); // 12 / 0 = Infinity

safeCalculator.clear();
safeCalculator.push(4);
safeCalculator.push(0);
console.log(safeCalculator.divide()); // error
