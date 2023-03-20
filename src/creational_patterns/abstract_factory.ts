interface ICarsFactory {
  createSedan(): ISedan;
  createCoupe(): ICoupe;
  createSuv(): ISuv;
}

class ToyotaFactory implements ICarsFactory {
  public createSedan(): ISedan {
    return new ToyotaSedan();
  }

  public createCoupe(): ICoupe {
    return new ToyotaCoupe();
  }

  public createSuv(): ISuv {
    return new ToyotaSuv();
  }
}

class FordFactory implements ICarsFactory {
  public createSedan(): ISedan {
    return new FordSedan();
  }

  public createCoupe(): ICoupe {
    return new FordCoupe();
  }

  public createSuv(): ISuv {
    return new FordSuv();
  }
}

class NissanFactory implements ICarsFactory {
  public createSedan(): ISedan {
    return new NissanSedan();
  }

  public createCoupe(): ICoupe {
    return new NissanCoupe();
  }

  public createSuv(): ISuv {
    return new NissanSuv();
  }
}

interface ISedan {
  info(): void;
}

interface ICoupe {
  info(): void;
}

interface ISuv{
  info(): void;
}

class ToyotaSedan implements ISedan {
  public info(): void {
    console.log('Toyota sedan');
  }
}

class ToyotaCoupe implements ICoupe {
  public info(): void {
    console.log('Toyota coupe');
  }
}

class ToyotaSuv implements ISuv {
  public info(): void {
    console.log('Toyota suv');
  }
}

class FordSedan implements ISedan {
  public info(): void {
    console.log('Ford sedan');
  }
}

class FordCoupe implements ICoupe {
  public info(): void {
    console.log('Ford coupe');
  }
}

class FordSuv implements ISuv {
  public info(): void {
    console.log('Ford suv');
  }
}

class NissanSedan implements ISedan {
  public info(): void {
    console.log('Nissan sedan');
  }
}

class NissanCoupe implements ICoupe {
  public info(): void {
    console.log('Nissan coupe');
  }
}

class NissanSuv implements ISuv {
  public info(): void {
    console.log('Nissan suv');
  }
}

export function runThisModule(): void {
  const toyotaFactory = new ToyotaFactory();
  toyotaFactory.createCoupe().info();

  const fordFactory = new FordFactory();
  fordFactory.createSedan().info();

  const nissanFactory = new NissanFactory();
  nissanFactory.createSuv().info();
}
