"use strict";
//class lanPython extends its super class language
class lanPython extends language {
    constructor(name, version) {
        super(name, version);
    }
    getInfo() {
        let info = `I'm language Python version ${this.version}`;
        return info;
    }
}
