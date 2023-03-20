class Body {
  public assembleBody(): void {
    console.log('Assemble car body...');
  }
}

class Wheels {
  public addWheels(): void {
    console.log('Add car wheels...');
  }
}

class Paint {
  public paintCar(): void {
    console.log('Paint car...');
  }
}

class Car {
  carBody : Body;
  carWheels : Wheels;
  carColor: Paint;

  constructor(body: Body, wheels: Wheels, paint: Paint) {
    this.carBody = body;
    this.carWheels = wheels;
    this.carColor = paint;
  }

  public assembleCar(): void {
    this.carBody.assembleBody();
    this.carWheels.addWheels();
    this.carColor.paintCar();

    console.log('Car is Done!');
  }
}

export function runThisModule(): void {
  const body = new Body();
  const wheels = new Wheels();
  const paint = new Paint();

  const car = new Car(body, wheels, paint);
  car.assembleCar();
}
