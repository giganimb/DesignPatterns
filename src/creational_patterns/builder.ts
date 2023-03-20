class Car {
  private _wheels: number;

  public get wheels() : number {
    return this._wheels;
  }

  public set wheels(v : number) {
    this._wheels = v;
  }

  private _body: string;

  public get body() : string {
    return this._body;
  }

  public set body(v : string) {
    this._body = v;
  }

  private _paint: string;

  public get paint() : string {
    return this._paint;
  }

  public set paint(v : string) {
    this._paint = v;
  }

  private _airbags: number;

  public get airbags() : number {
    return this._airbags;
  }

  public set airbags(v : number) {
    this._airbags = v;
  }

  public getInfo(): void {
    const info: string = (this.wheels ? `Wheels number: ${this.wheels}\n` : '') +
                          (this.body ? `Body type: ${this.body}\n` : '') +
                          (this.paint ? `Paint color: ${this.paint}\n` : '') +
                          (this.airbags ? `Airbags number: ${this.airbags}\n` : '');

    console.log(info);
  }
}

interface ICarBuilder{
  car: Car;
  setWheels(wheeksNumber: number): this;
  setBody(bodyType: string): this;
  setPaint(paintColor: string): this;
  setAirbag(airbags: number | undefined): this;
}

class SaveCarBuilder implements ICarBuilder {
  car: Car;

  constructor() {
    this.car = new Car();
  }

  public setWheels(wheeksNumber: number): this {
    this.car.wheels = wheeksNumber;
    return this;
  }

  public setBody(bodyType: string): this {
    this.car.body = bodyType;
    return this;
  }

  public setPaint(paintColor: string): this {
    this.car.paint = paintColor;
    return this;
  }

  public setAirbag(airbags: number): this {
    this.car.airbags = airbags;
    return this;
  }
}

class UnsaveCarBuilder implements ICarBuilder {
  public car: Car;

  constructor() {
    this.car = new Car();
  }

  public setWheels(wheeksNumber: number): this {
    this.car.wheels = wheeksNumber;
    return this;
  }

  public setBody(bodyType: string): this {
    this.car.body = bodyType;
    return this;
  }

  public setPaint(paintColor: string): this {
    this.car.paint = paintColor;
    return this;
  }

  public setAirbag(): this {
    return this;
  }
}

class CarFactory {
  public assembleCar(carBuilder: ICarBuilder, wheelsNumber: number, bodyType: string, paintColor: string, airbags: number | undefined = undefined): Car {
    carBuilder.setWheels(wheelsNumber)
              .setBody(bodyType)
              .setPaint(paintColor)
              .setAirbag(airbags);
    return carBuilder.car;
  }
}

export function runThisModule(): void {
  const carFactory = new CarFactory();

  const saveCarBuilder = new SaveCarBuilder();

  const saveCar = carFactory.assembleCar(saveCarBuilder, 4, 'sedan', 'red', 2);
  console.log(JSON.stringify(saveCar));
  saveCar.getInfo();

  const unsaveCarBuilder = new UnsaveCarBuilder();

  const unsaveCar = carFactory.assembleCar(unsaveCarBuilder, 4, 'suv', 'black');
  console.log(JSON.stringify(unsaveCar));
  unsaveCar.getInfo();
}
