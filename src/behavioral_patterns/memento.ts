class Hero {
  private patrons: number = 10;
  private lives: number = 5;

  public shoot(): void {
    if (this.patrons > 0) {
      this.patrons--;
      console.log(`We make a shot, there are only ${this.patrons} patrons left`);
    }
    else {
      console.log('There is no ammo');
    }
  }

  public SaveState(): HeroMemento {
    console.log(`Game saving... Parameters: ${this.patrons} patrons, ${this.lives} lives`);
    return new HeroMemento(this.patrons, this.lives);
  }

  public restoreState(memento: HeroMemento | undefined): void {
    this.patrons = memento?.patrons ?? -1;
    this.lives = memento?.lives ?? -1;
    console.log(`Game restoring... Parameters: ${this.patrons} patrons, ${this.lives} lives`);
  }
}

class HeroMemento {
  private _patrons: number;

  public get patrons() : number {
    return this._patrons;
  }

  private set patrons(v : number) {
    this._patrons = v;
  }

  private _lives: number;

  public get lives() : number {
    return this._lives;
  }

  private set lives(v : number) {
    this._lives = v;
  }

  constructor(patrons: number, lives: number) {
    this.patrons = patrons;
    this.lives = lives;
  }
}

class GameHistory {
  private _history: HeroMemento[];

  public get history() : HeroMemento[] {
    return this._history;
  }

  private set history(v : HeroMemento[]) {
    this._history = v;
  }

  constructor() {
    this.history = [];
  }
}

export function runThisModule(): void {
  const hero: Hero = new Hero();
  const gameHistory: GameHistory = new GameHistory();

  hero.shoot();
  gameHistory.history.push(hero.SaveState());

  hero.shoot();

  hero.restoreState(gameHistory.history.pop());

  hero.shoot();
}
