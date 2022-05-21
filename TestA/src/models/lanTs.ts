//class lanTs extends its super class language
class lanTs extends language {
  constructor(name: string, version: string) {
    super(name, version);
  }
  public getInfo() {
    let info = `I'm language Typescript version ${this.version}`;
    return info;
  }
}
