interface IWaterState {
  heat(water: Water): void;
  frost(water: Water): void;
}

class Water {
  public state: IWaterState;
  constructor(waterState: IWaterState) {
    this.state = waterState;
  }

  public heat(): void {
    this.state.heat(this);
  }

  public frost(): void {
    this.state.frost(this);
  }
}

class SolidWaterState implements IWaterState {
  public heat(water: Water): void {
    console.log('Ice to water');
    water.state = new LiquidWaterState();
  }

  public frost(water: Water): void {
    console.log('Continue freezing ice');
    water.state = this;
  }
}

class LiquidWaterState implements IWaterState {
  public heat(water: Water): void {
    console.log('Water to steam');
    water.state = new GasWaterState();
  }

  public frost(water: Water): void {
    console.log('Water to ice');
    water.state = new SolidWaterState();
  }
}

class GasWaterState implements IWaterState {
  public heat(water: Water): void {
    console.log('Continue heating gas');
    water.state = this;
  }

  public frost(water: Water): void {
    console.log('Gas to water');
    water.state = new LiquidWaterState();
  }
}

export function runThisModule(): void {
  const water: Water = new Water(new LiquidWaterState());
  console.log(`State: ${water.state.constructor.name}`);
  water.heat();
  console.log(`State: ${water.state.constructor.name}`);
  water.heat();
  console.log(`State: ${water.state.constructor.name}`);
  water.frost();
  console.log(`State: ${water.state.constructor.name}`);
  water.frost();
  console.log(`State: ${water.state.constructor.name}`);
  water.frost();
  console.log(`State: ${water.state.constructor.name}`);
}
