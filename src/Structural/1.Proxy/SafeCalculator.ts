import { StackCalculator } from "./StackCalculator";

export class SafeCalculator {
  constructor(private calculator: StackCalculator) {}

  // 프록시
  divide() {
    const divisor = this.calculator.peek();
    if (divisor === 0) {
      throw new Error("Division by 0");
    }
    return this.calculator.divide();
  }

  // 위임된 함수들
  isEmpty(): boolean {
    return this.calculator.isEmpty();
  }

  push(value: number): void {
    this.calculator.push(value);
  }

  pop(): number | undefined {
    return this.calculator.pop();
  }

  peek(): number {
    return this.calculator.peek();
  }

  clear(): void {
    return this.calculator.clear();
  }

  multiply(): number | undefined {
    return this.calculator.multiply();
  }
}

const calculator = new StackCalculator();
const safeCalculator = new SafeCalculator(calculator);

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
