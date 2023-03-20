abstract class House {
  protected stages: number;
  public abstract build(longitude: number, latitude: number): void;
}

class PanelHouse extends House {
  constructor() {
    super();
    this.stages = 16;
  }

  public build(longitude: number, latitude: number): void {
    console.log(`Built panel house of 16 floors;\nits coordinates:\nlongitude - ${longitude},\nlatitude - ${latitude}`);
  }
}

class BrickHouse extends House {
  constructor() {
    super();
    this.stages = 5;
  }

  public build(longitude: number, latitude: number): void {
    console.log(`Built panel house of 5 floors;\nits coordinates:\nlongitude - ${longitude},\nlatitude - ${latitude}`);
  }
}

class HouseFactory {
  houses: Map<string, House> = new Map<string, House>();
  constructor() {
    this.houses.set('Panel', new PanelHouse());
    this.houses.set('Brick', new BrickHouse());
  }

  public getHouse(key: string): House | undefined {
    if (this.houses.has(key)) {
      return this.houses.get(key);
    }
    else {
      return undefined;
    }
  }
}

export function runThisModule(): void {
  let longitude: number = 37.61;
  let latitude: number = 55.74;

  const houseFactory = new HouseFactory();
  for (let i = 0; i < 5; i++) {
    const panelHouse = houseFactory.getHouse('Panel');
    if (panelHouse != null) {
      panelHouse.build(longitude, latitude);
    }
    longitude += 0.1;
    latitude += 0.1;
  }

  for (let i = 0; i < 5; i++) {
    const brickHouse = houseFactory.getHouse('Brick');
    if (brickHouse != null) {
      brickHouse.build(longitude, latitude);
    }
    longitude += 0.1;
    latitude += 0.1;
  }
}
