class Profiler {
  private lastTime: any = null;
  constructor(private label: string) {}

  start(): void {
    this.lastTime = process.hrtime();
  }

  end(): void {
    const diff = process.hrtime(this.lastTime);
    console.log(
      `Timer ${this.label} took ${diff[0]} seconds and ${diff[1]} nanoseconds`
    );
  }
}

export function createProfiler(label: string) {
  return new Profiler(label);
}
