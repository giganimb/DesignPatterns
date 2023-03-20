abstract class MammalFactory {
  public abstract getProduct(): Product;

  public getFactoryResourceName(): string {
    const product = this.getProduct();

    return `Factory: ${product.getResourceName()}`;
  }
}

class Sheep extends MammalFactory {
  public getProduct(): Product {
    return new Wool();
  }
}

class Cow extends MammalFactory {
  public getProduct(): Product {
    return new Milk();
  }
}

interface Product {
  getResourceName(): string;
}

class Wool implements Product {
  public getResourceName(): string {
    return 'wool';
  }
}

class Milk implements Product {
  public getResourceName(): string {
    return 'milk';
  }
}

export function runThisModule(): void {
  const sheep = new Sheep();
  console.log(sheep.getFactoryResourceName());

  const cow = new Cow();
  console.log(cow.getFactoryResourceName());
}
