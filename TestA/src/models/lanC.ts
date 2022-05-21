//class lanC extends its super class language
class lanC extends language {
  constructor(name: string, version: string) {
    super(name, version);
  }
  public getInfo() {
    let info = `I'm language C# version ${this.version}`;
    return info;
  }
}
