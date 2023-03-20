interface ICommand {
  powerOn(): void;
  powerOff(): void;
}

class TV {
  public on(): void {
    console.log('TV is on');
  }

  public off(): void {
    console.log('TV is off');
  }
}

class TVOnCommand implements ICommand {
  tv: TV;
  constructor(tv: TV) {
    this.tv = tv;
  }

  public powerOn(): void {
    this.tv.on();
  }

  public powerOff(): void {
    this.tv.off();
  }
}

class Microwave {
  public startCook(time: number): void {
    console.log('Warm upping food...');
    sleep(time);
  }

  public stopCook(): void {
    console.log('Food is done');
  }
}

class MicrowaveCommand implements ICommand {
  microwave: Microwave;
  time: number;
  constructor(microwave: Microwave, time: number) {
    this.microwave = microwave;
    this.time = time;
  }

  public powerOn(): void {
    this.microwave.startCook(this.time);
    this.microwave.stopCook();
  }

  public powerOff(): void {
    this.microwave.stopCook();
  }
}

class Pult {
  command: ICommand;

  public setCommand(command: ICommand): void {
    this.command = command;
  }

  public pressOn(): void {
    this.command.powerOn();
  }

  public pressOff(): void {
    this.command.powerOff();
  }
}

function sleep(milliseconds: number): void {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

export function runThisModule(): void {
  const pult: Pult = new Pult();
  const tv: TV = new TV();

  pult.setCommand(new TVOnCommand(tv));
  pult.pressOn();
  pult.pressOff();

  const microwave: Microwave = new Microwave();
  pult.setCommand(new MicrowaveCommand(microwave, 5000));
  pult.pressOn();
}
