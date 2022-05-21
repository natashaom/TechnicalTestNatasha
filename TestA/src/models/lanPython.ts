//class lanPython extends its super class language
class lanPython extends language {
  constructor(name: string, version: string) {
    super(name, version);
  }
  public getInfo() {
    let info = `I'm language Python version ${this.version}`;
    return info;
  }
}
