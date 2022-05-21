"use strict";
//class lanTs extends its super class language
class lanTs extends language {
    constructor(name, version) {
        super(name, version);
    }
    getInfo() {
        let info = `I'm language Typescript version ${this.version}`;
        return info;
    }
}
