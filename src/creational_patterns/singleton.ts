export class Singleton {
  private static instance: Singleton;
  private static count: number; //business logic

  private constructor() { }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    Singleton.count = 0;

    return Singleton.instance;
  }

  public getCount(): number {
    return Singleton.count;
  }

  public increaseCount(): number {
    return Singleton.count++;
  }

}

export function runThisModule(): void {
  const inst1 = Singleton.getInstance();
  const inst2 = Singleton.getInstance();

  inst1.increaseCount();
  inst1.increaseCount();
  inst2.increaseCount();
  inst2.increaseCount();

  console.log(inst1.getCount());
  console.log(inst2.getCount());
}
