//class codeGen extends its super class generator
class codeGen extends generator {
  constructor(name: string) {
    super(name);
  }
  public getInfo() {
    let info = `I'm a ${this.name} generator`;
    return info;
  }
}
