interface IPizza {
  name: string;
  getCost(): number;
}

class ItalianPizza implements IPizza {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getCost(): number {
    return 10;
  }
}

class BulgerianPizza implements IPizza {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getCost(): number {
    return 5;
  }
}

class PizzaDecorator implements IPizza {
  name: string;
  pizza: IPizza;

  constructor(name: string, pizza: IPizza) {
    this.name = name;
    this.pizza = pizza;
  }

  public getCost(): number {
    return this.pizza.getCost();
  }
}

class TomatoPizza extends PizzaDecorator {
  constructor(pizza: IPizza) {
    super(pizza.name + ', with tomatos', pizza);
  }

  public getCost(): number {
    return this.pizza.getCost() + 3;
  }
}

class CheesePizza extends PizzaDecorator {
  constructor(pizza: IPizza) {
    super(pizza.name + ', with cheese', pizza);
  }

  public getCost(): number {
    return this.pizza.getCost() + 5;
  }
}

export function runThisModule(): void {
  let pizza1: ItalianPizza = new ItalianPizza('Parmesan');
  pizza1 = new TomatoPizza(pizza1);

  console.log(`Name: ${pizza1.name}\nPrice: ${pizza1.getCost()}`);

  let pizza2: ItalianPizza = new ItalianPizza('Domovik');
  pizza2 = new CheesePizza(pizza2);

  console.log(`Name: ${pizza2.name}\nPrice: ${pizza2.getCost()}`);

  let pizza3: BulgerianPizza = new BulgerianPizza('Dobraya');
  pizza3 = new TomatoPizza(pizza3);
  pizza3 = new CheesePizza(pizza3);

  console.log(`Name: ${pizza3.name}\nPrice: ${pizza3.getCost()}`);
}
