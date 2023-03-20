interface ICars {
  clone(): ICars;
  getInfo(): void;
}

class TeslaCar implements ICars {
  private _model: string;

  public get model() : string {
    return this._model;
  }

  public set model(v : string) {
    this._model = v;
  }

  private _price: number;

  public get price() : number {
    return this._price;
  }

  public set price(v : number) {
    this._price = v;
  }

  private _maxSpeed: number;

  public get maxSpeed() : number {
    return this._maxSpeed;
  }

  public set maxSpeed(v : number) {
    this._maxSpeed = v;
  }

  constructor(model: string, price: number, maxSpeed: number) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }

  public clone(): ICars {
    return new TeslaCar(this.model, this.price, this.maxSpeed);
  }

  public getInfo(): void {
    console.log(`Model: ${this.model}\nPrice: ${this.price}\nMax speed: ${this.maxSpeed}`);
  }
}

export function runThisModule(): void {
  const car = new TeslaCar('modelS', 60000, 500);
  const newCar = car.clone();

  car.getInfo();
  newCar.getInfo();
}
