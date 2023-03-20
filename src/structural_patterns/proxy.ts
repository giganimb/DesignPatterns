interface ISubject {
  request(): void;
}

class RealSubject implements ISubject {
  public request(): void {
    console.log('RealSubject: hnadling request...');
  }
}

class Proxy implements ISubject {
  private realSubject: RealSubject;

  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject;
  }

  public request(): void {
    if (this.checkAccess()) {
      this.realSubject.request();
      this.logAccess();
    }
  }

  private checkAccess(): boolean {
    console.log('Handling something...(password, login, etc)');

    return true;
  }

  private logAccess(): void {
    console.log('Logging something...(time, operation. status, etc)');
  }
}

export function runThisModule(): void {
  const realSubject = new RealSubject();
  realSubject.request();

  const proxySubject = new Proxy(realSubject);
  proxySubject.request();
}
