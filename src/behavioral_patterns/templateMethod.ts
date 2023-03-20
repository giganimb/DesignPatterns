abstract class CarBuilder {
  public buildCar(): void {
    this.getBody();
    this.addWheels();
    this.paintCar();
  }

  public abstract getBody(): void;
  public abstract addWheels(): void;
  public abstract paintCar(): void;
}

class BmwBuilder extends CarBuilder {
  public getBody(): void {
    console.log('BWM body is added');
  }
  public addWheels(): void {
    console.log('Wheels are added to BWM body');
  }
  public paintCar(): void {
    console.log('New BWM has fresh color');
  }
}

class TeslaBuilder extends CarBuilder {
  public getBody(): void {
    console.log('Tesla body is added');
  }
  public addWheels(): void {
    console.log('Wheels are added to Tesla body');
  }
  public paintCar(): void {
    console.log('New Tesla has fresh color');
  }
}

export function runThisModule(): void {
  const bwmBuilder: BmwBuilder = new BmwBuilder();
  bwmBuilder.buildCar();

  console.log('----------');

  const teslaBuilder: TeslaBuilder = new TeslaBuilder();
  teslaBuilder.buildCar();
}
