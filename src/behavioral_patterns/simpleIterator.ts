class Iterator {
  elements: string[];
  index: number;
  constructor(elements: string[]) {
    this.index = 0;
    this.elements = elements;
  }

  public next(): string {
    return this.elements[this.index++];
  }

  public hasNext(): boolean {
    return this.index < this.elements.length;
  }
}

export function runThisModule(): void {
  const collection = new Iterator(['BMW', 'Tesla', 'Audi', 'Kia']);

  while (collection.hasNext()) {
    console.log(collection.next());
  }
}
