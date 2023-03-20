abstract class Component {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }

  public add(file: Component): void {}
  public remove(file: Component): void {}
  public print(): void {
    console.log(this.name);
  }
}

class Directory extends Component {
  private files: Array<Component> = new Array<Component>;
  constructor(name: string) {
    super(name);
  }

  public add(file: Component): void {
    this.files.push(file);
  }

  public remove(file: Component): void {
    const removingIndex: number = this.files.findIndex((i) => i.name == file.name);
    this.files.splice(removingIndex, 1);
  }

  public print(): void {
    console.log(`Node: ${this.name}`);
    console.log('Subnodes:');
    for (let i = 0; i < this.files.length; i++) {
      this.files[i].print();
    }
  }
}

class File extends Component {
  constructor(name: string) {
    super(name);
  }
}

export function runThisModule(): void {
  const fileSystem = new Directory('File system');

  const diskC = new Directory('Disk C');
  const diskD = new Directory('Disk D');

  const fileA = new File('File A');
  const fileB = new File('File B');

  diskC.add(fileA);
  diskD.add(fileB);

  fileSystem.add(diskC);
  fileSystem.add(diskD);

  fileSystem.print();

  diskD.remove(fileB);

  console.log('-------');

  fileSystem.print();
}
