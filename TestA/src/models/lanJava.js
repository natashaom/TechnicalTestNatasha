"use strict";
//class lanJava extends its super class language
class lanJava extends language {
    constructor(name, version) {
        super(name, version);
    }
    getInfo() {
        let info = `I'm language Java version ${this.version}`;
    }
}
