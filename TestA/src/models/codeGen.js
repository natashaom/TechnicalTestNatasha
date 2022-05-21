"use strict";
//class codeGen extends its super class generator
class codeGen extends generator {
    constructor(name) {
        super(name);
    }
    getInfo() {
        let info = `I'm a ${this.name} generator`;
        return info;
    }
}
