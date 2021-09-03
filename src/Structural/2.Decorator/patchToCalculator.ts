import { isNumber } from "../../type-guard";
import { StackCalculator } from "../1.Proxy/StackCalculator";

export const patchToCalculator = (calculator) => {
  calculator.add = () => {
    const addend2 = calculator.pop();
    const addend1 = calculator.pop();
    if (isNumber(addend1) && isNumber(addend2)) {
      const result = addend1 + addend2;
      calculator.push(result);
      return result;
    }
  };

  const divideOrig = calculator.divide;
  calculator.divide = () => {
    // 추가 검증 로직
    const divisor = calculator.peek();
    if (divisor === 0) {
      throw new Error("Division by 0");
    }
    return divideOrig.apply(calculator);
  };

  return calculator;
};

const calculator = new StackCalculator();
const enhancedCalculator = patchToCalculator(calculator);

enhancedCalculator.push(4);
enhancedCalculator.push(3);
console.log(enhancedCalculator.add()); // 4 + 3 = 7

enhancedCalculator.push(2);
console.log(enhancedCalculator.multiply()); // 7 * 2 = 14
