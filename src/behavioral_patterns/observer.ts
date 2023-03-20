class AutoNews {
  text: string;
  actions: ISubscriber[];

  constructor() {
    this.text = '';
    this.actions = [];
  }

  public setNews(text: string): void {
    this.text = text;
    this.notifyAll();
  }

  public notifyAll(): void {
    this.actions.forEach(subs => subs.inform(this));
  }

  public register(observer: ISubscriber): void {
    this.actions.push(observer);
  }
}

interface ISubscriber {
  inform(news: AutoNews): void;
}

class Jack implements ISubscriber {
  public inform(news: AutoNews): void {
    console.log(`Jack has been informed about: ${news.text}`);
  }
}

class Max implements ISubscriber {
  public inform(news: AutoNews): void {
    console.log(`Max has been informed about: ${news.text}`);
  }
}

export function runThisModule(): void {
  const autoNews: AutoNews = new AutoNews();

  autoNews.register(new Jack());

  autoNews.setNews('Hey, Jack, you are the first subscriber!');

  autoNews.register(new Max());

  autoNews.setNews('Winter coming soon');
}
