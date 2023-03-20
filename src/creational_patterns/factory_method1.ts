export class Bmw {
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
}

export class BmwFactory {
  public create(model: string = 'X4'): Bmw {
    switch (model) {
      case 'X5':{
        return new Bmw(model, 111111, 100);
      }
      case 'X6':{
        return new Bmw(model, 222222, 200);
      }
      default:{
        return new Bmw('X4', 25000, 100);
      }
    }
  }
}

export function runThisModule(): void {
  const bmwFactory = new BmwFactory();

  console.log(JSON.stringify(bmwFactory.create('X5')));
  console.log(JSON.stringify(bmwFactory.create('X6')));
  console.log(bmwFactory.create().price);
}
