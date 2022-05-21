"use strict";
//class uiGen extends its super class generator
class uiGen extends generator {
    constructor(name) {
        super(name);
    }
    getInfo() {
        let info = `I'm a ${this.name} generator`;
        return info;
    }
}
