class interlang {
  uiGenerators: Array<uiGen>;
  codeGenerators: Array<codeGen>;
  constructor(
    public inCode: string,
    public outCode: string,
    public uiLib: library,
    public lang: language
  ) {
    this.inCode = inCode;
    this.outCode = outCode;
    this.uiLib = uiLib;
    this.lang = lang;
    this.uiGenerators = [];
    this.codeGenerators = [];
  }

  /**
   * generateOutput after injecting code and ui generators what
   * the method does is write the final output and set it to the outCode variable
   */
  public generateOutput(inCode: string, lang: string) {
    return this.outCode;
  }

  /**
   * generateUis method to get all the UI generators available that
   * matches the UI library and push them into the uiGenerators array
   */
  public generateUis(uiLib: library) {}

  /**
   * injectUis method to inject all the UI generators to the code generators
   */
  public injectUis(uiLib: library) {}

  /**
   * addCodeGens method to push codeGenerator to array
   */
  public addCodeGens(codeG: codeGen) {}

  /**
   * addUiGens method to push uiGenerator to array
   */
  public addUiGens(uiG: uiGen) {}

  public getCodeGens() {}

  public getUiGens() {}
}
