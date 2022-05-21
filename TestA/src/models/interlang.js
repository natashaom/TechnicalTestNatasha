"use strict";
class interlang {
    constructor(inCode, outCode, uiLib, lang) {
        this.inCode = inCode;
        this.outCode = outCode;
        this.uiLib = uiLib;
        this.lang = lang;
        this.inCode = inCode;
        this.outCode = outCode;
        this.uiLib = uiLib;
        this.lang = lang;
        this.uiGenerators = [];
        this.codeGenerators = [];
    }
    /**
     * writeOutput after injecting code and ui generators what
     * the method does is write the final output and set it to the outCode variable
     */
    writeOutput(inCode, lang) {
        return this.outCode;
    }
    /**
     * generateUis method to get all the UI generators available that
     * matches the UI library and push them into the uiGenerators array
     */
    generateUis(uiLib) { }
    /**
     * injectUis method to inject all the UI generators to the code generators
     */
    injectUis(uiLib) { }
    /**
     * addCodeGens method to push codeGenerator to array
     */
    addCodeGens(codeG) { }
    /**
     * addUiGens method to push uiGenerator to array
     */
    addUiGens(uiG) { }
    getCodeGens() { }
    getUiGens() { }
}
