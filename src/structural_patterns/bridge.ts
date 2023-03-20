interface ILanguage {
  build(): void;
  execute(): void;
}

class CPPLanguage implements ILanguage {
  public build(): void {
    console.log('Build cpp program...');
  }

  public execute(): void {
    console.log('Cpp program executing...');
  }
}

class CSharpLanguage implements ILanguage {
  public build(): void {
    console.log('Build exe file with Roslyn help...');
  }

  public execute(): void {
    console.log('JIT compilation...');
    console.log('CLR execution...');
  }
}

abstract class Programmer {
  public language: ILanguage;
  constructor(lang: ILanguage) {
    this.language = lang;
  }

  public doWork(): void {
    this.language.build();
    this.language.execute();
  }

  public abstract earnMoney(): void;
}

class FreelanceProgrammer extends Programmer {
  constructor(lang: ILanguage) {
    super(lang);
  }

  public earnMoney(): void {
    console.log('Getting salary for a order');
  }
}

class CorporateProgrammer extends Programmer {
  constructor(lang: ILanguage) {
    super(lang);
  }

  public earnMoney(): void {
    console.log('Getting salary for a month');
  }
}

export function runThisModule(): void {
  const freelancer = new FreelanceProgrammer(new CPPLanguage());
  freelancer.doWork();
  freelancer.earnMoney();

  freelancer.language = new CSharpLanguage();
  freelancer.doWork();
  freelancer.earnMoney();

  console.log('----------');

  const corporater = new CorporateProgrammer(new CPPLanguage());
  corporater.doWork();
  corporater.earnMoney();

  corporater.language = new CSharpLanguage();
  corporater.doWork();
  corporater.earnMoney();
}
