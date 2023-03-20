interface IVisitor {
  vivsitPersonAcc(acc: Person): void;
  vivsitCompanyAcc(acc: Company): void;
}

class UnderScoreVisitor implements IVisitor {
  public vivsitCompanyAcc(acc: Company): void {
    console.log(acc.name + '_' + acc.number + '_' + acc.regNumber);
  }
  public vivsitPersonAcc(acc: Person): void {
    console.log(acc.name + '_' + acc.number);
  }
}

class CamelCaseVisitor implements IVisitor {
  public vivsitCompanyAcc(acc: Company): void {
    console.log(acc.name.substring(0,1).toUpperCase() + acc.name.substring(1) +
                acc.number.substring(0,1).toUpperCase() + acc.number.substring(1) +
                acc.regNumber.substring(0,1).toUpperCase() + acc.regNumber.substring(1));
  }
  public vivsitPersonAcc(acc: Person): void {
    console.log(acc.name.substring(0,1).toUpperCase() + acc.name.substring(1) +
                acc.number.substring(0,1).toUpperCase() + acc.number.substring(1));
  }
}

class Bank {
  accounts: Array<IAccount> = [];

  public add(acc: IAccount): void {
    this.accounts.push(acc);
  }

  public remove(acc: IAccount): void {
    const deletingIndex = this.accounts.findIndex((i) => i.name == acc.name);
    this.accounts.splice(deletingIndex, 1);
  }

  public accept(visitor: IVisitor): void {
    for (const acc of this.accounts) {
      acc.accept(visitor);
    }
  }
}

interface IAccount {
  name: string;
  number: string;
  accept(visitor: IVisitor): void;
}

class Person implements IAccount {
  public name: string;
  public number: string;

  public accept(visitor: IVisitor): void {
    visitor.vivsitPersonAcc(this);
  }
}

class Company implements IAccount {
  public name: string;
  public regNumber: string;
  public number: string;

  public accept(visitor: IVisitor): void {
    visitor.vivsitCompanyAcc(this);
  }
}

export function runThisModule(): void {
  const bank: Bank = new Bank();
  const person: Person = new Person();
  person.name = 'Ivan';
  person.number = '123456789';
  const company: Company = new Company();
  company.name = 'BelTel';
  company.number = '987654321';
  company.regNumber = 'qwerty';

  bank.add(person);
  bank.add(company);

  bank.accept(new CamelCaseVisitor());
  bank.accept(new UnderScoreVisitor());
}
