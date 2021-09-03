import { isNumber } from "../../type-guard";
import { StackCalculator } from "../1.Proxy/StackCalculator";

export class EnhancedCalculator {
  constructor(private calculator: StackCalculator) {}

  add(): number | undefined {
    const addend2 = this.pop();
    const addend1 = this.pop();
    if (isNumber(addend1) && isNumber(addend2)) {
      const result = addend1 + addend2;
      this.push(result);
      return result;
    }
  }
  divide() {
    const divisor = this.calculator.peek();
    if (divisor === 0) {
      throw new Error("Division by 0");
    }
    return this.calculator.divide();
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
const enhancedCalculator = new EnhancedCalculator(calculator);

enhancedCalculator.push(4);
enhancedCalculator.push(3);
console.log(enhancedCalculator.add()); // 7

enhancedCalculator.push(2);
console.log(enhancedCalculator.multiply()); // 14
