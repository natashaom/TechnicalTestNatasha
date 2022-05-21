//class lanJava extends its super class language
class lanJava extends language {
  constructor(name: string, version: string) {
    super(name, version);
  }
  public getInfo() {
    let info = `I'm language Java version ${this.version}`;
  }
}
