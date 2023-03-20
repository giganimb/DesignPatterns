interface IMovable {
  move(): void;
}

class PetrolMove implements IMovable {
  public move(): void {
    console.log('Moving on petrol');
  }
}

class ElectricMove implements IMovable {
  public move(): void {
    console.log('Moving on electricity');
  }
}

class Car {
  protected passengers: number;
  protected model: string;
  public movable: IMovable;

  constructor(num: number, model: string, mov: IMovable) {
    this.passengers = num;
    this.model = model;
    this.movable = mov;
  }

  public move(): void {
    this.movable.move();
  }
}

export function runThisModule(): void {
  const auto: Car = new Car(4, 'Volvo', new PetrolMove());
  auto.move();
  auto.movable = new ElectricMove();
  auto.move();
}
