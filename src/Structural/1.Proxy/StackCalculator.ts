import { isNumber } from "../../type-guard";

export class StackCalculator {
  private stack: number[] = [];

  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  push(value: number): void {
    this.stack.push(value);
  }

  pop(): number | undefined {
    return this.stack.pop();
  }

  peek(): number {
    const lastIndex = this.stack.length - 1;
    return this.stack[lastIndex];
  }

  clear(): void {
    this.stack = [];
  }

  divide(): number | undefined {
    const divisor = this.pop();
    const dividend = this.pop();
    if (isNumber(divisor) && isNumber(dividend)) {
      const result = dividend / divisor;
      this.push(result);
      return result;
    }
  }

  multiply(): number | undefined {
    const multiplicand = this.pop();
    const multiplier = this.pop();
    if (isNumber(multiplicand) && isNumber(multiplier)) {
      const result = multiplicand * multiplier;
      this.push(result);
      return result;
    }
  }
}

const calculator = new StackCalculator();
calculator.push(3);
calculator.push(2);
console.log(calculator.multiply()); // 6
calculator.push(2);
console.log(calculator.multiply()); // 12
calculator.push(0);
console.log(calculator.divide()); // 12 / 0 = Infinity
