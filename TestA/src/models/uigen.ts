//class uiGen extends its super class generator
class uiGen extends generator {
  constructor(name: string) {
    super(name);
  }
  public getInfo() {
    let info = `I'm a ${this.name} generator`;
    return info;
  }
}
