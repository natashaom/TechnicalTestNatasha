"use strict";
//class lanC extends its super class language
class lanC extends language {
    constructor(name, version) {
        super(name, version);
    }
    getInfo() {
        let info = `I'm language C# version ${this.version}`;
        return info;
    }
}
