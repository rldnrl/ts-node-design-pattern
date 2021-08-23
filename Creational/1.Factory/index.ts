import { createProfiler } from "./Profiler";

type GetAllFactory = (intNumber: number) => number[];

export const getAllFactory: GetAllFactory = (intNumber) => {
  const profiler = createProfiler(`Finding all factors of ${intNumber}`);

  profiler.start();
  const factors: number[] = [];
  for (let factor = 2; factor <= intNumber; factor++) {
    while (intNumber % factor === 0) {
      factors.push(factor);
      intNumber = intNumber / factor;
    }
  }
  profiler.end();

  return factors;
};

const myNumber = Number(process.argv[2]);
const myFactors = getAllFactory(myNumber);

console.log(`Factors of ${myNumber} are: `, myFactors);
