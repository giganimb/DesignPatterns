abstract class Mediator {
  public abstract send(message: string, colleague: Colleague): void;
}

abstract class Colleague {
  protected mediator: Mediator;

  constructor(mediator: Mediator) {
    this.mediator = mediator;
  }

  public send(message: string): void {
    this.mediator.send(message, this);
  }

  public abstract notify(message: string): void;
}

class CutomerColleague extends Colleague {
  constructor(mediator: Mediator) {
    super(mediator);
  }
   public notify(message: string): void {
     console.log(`Message to customer: ${message}`);
   }
}

class ProgrammerColleague extends Colleague {
  constructor(mediator: Mediator) {
    super(mediator);
  }
   public notify(message: string): void {
     console.log(`Message to programmer: ${message}`);
   }
}

class TesterColleague extends Colleague {
  constructor(mediator: Mediator) {
    super(mediator);
  }
   public notify(message: string): void {
     console.log(`Message to tester: ${message}`);
   }
}

class ManagerMediator extends Mediator {
  public customer: Colleague;
  public programmer: Colleague;
  public tester: Colleague;

  public send(message: string, colleague: Colleague): void {
    if (colleague == this.customer) {
      this.programmer.notify(message);
    }
    else if (colleague == this.programmer) {
      this.tester.notify(message);
    }
    else if (colleague == this.tester) {
      this.customer.notify(message);
    }
  }
}

export function runThisModule(): void {
  const mediator: ManagerMediator = new ManagerMediator();
  const customer: CutomerColleague = new CutomerColleague(mediator);
  const programmer: ProgrammerColleague = new ProgrammerColleague(mediator);
  const tester: TesterColleague = new TesterColleague(mediator);

  mediator.customer = customer;
  mediator.programmer = programmer;
  mediator.tester = tester;

  customer.send('There is a order, we need to develop a program');
  programmer.send('Program is done, we need testing');
  tester.send('Program is tested, and we can sell it');
}
