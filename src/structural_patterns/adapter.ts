interface ITransport {
  Drive(): void;
}

interface IAnimal {
  Move(): void;
}

class Car implements ITransport {
  public Drive(): void {
    console.log('Car drives on a road...');
  }
}

class Camel implements IAnimal {
  public Move(): void {
    console.log('Camel walking on a desert...');
  }
}

class Traveler {
  public travel(transport: ITransport): void {
    transport.Drive();
  }
}

class CamelToTransportAdapter implements ITransport {
  private camel: Camel;

  constructor(camel: Camel) {
    this.camel = camel;
  }

  public Drive(): void {
    this.camel.Move();
  }
}

export function runThisModule(): void {
  const traveler: Traveler = new Traveler();

  const car: Car = new Car();

  traveler.travel(car);

  const camel: Camel = new Camel();

  const camelTransport = new CamelToTransportAdapter(camel);

  traveler.travel(camelTransport);
}
