class Account {
  name: string;
  balance: number;
  incomer: Account;

  public pay(orderPrice: number): void {
    if (this.canPay(orderPrice)) {
      console.log(`Paid ${orderPrice} using ${this.name}`);
    }
    else if (this.incomer) {
      console.log(`Cannot pay using ${this.name}`);
      this.incomer.pay(orderPrice);
    }
    else {
      console.log('Unfortunately, not enough money');
    }
  }

  public canPay(amount: number): boolean {
    return this.balance >= amount;
  }

  public setNext(account: Account): void {
    this.incomer = account;
  }

  public show(): void {
    console.log(this);
  }
}

class Master extends Account {
  constructor(balance: number) {
    super();
    this.name = 'Master Card';
    this.balance = balance;
  }
}

class Paypal extends Account {
  constructor(balance: number) {
    super();
    this.name = 'Paypal';
    this.balance = balance;
  }
}

class Qiwi extends Account {
  constructor(balance: number) {
    super();
    this.name = 'Qiwi';
    this.balance = balance;
  }
}

export function runThisModule(): void {
  const master: Master = new Master(100);
  const paypal: Paypal = new Paypal(200);
  const qiwi: Qiwi = new Qiwi(500);

  master.setNext(paypal);
  paypal.setNext(qiwi);

  master.pay(438);

  master.show();
}
