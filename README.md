# TechnicalTestNatasha

Hi, I'm Natasha Ortega Meléndez and this is the result of my technical test.

Basically what I did was implement certain classes:

1. Main class Interlang with the next attributes

- inCode: for the incoming code that you want to convert.
- outCode: for the result code when it is already converted to the required language code.
- uiLib: object library for the UI library.
- lang: object language for the required language.
- uiGenerators: Array with all the UI generators you want to inject to code generators.
- codeGenerators: Array with all the code generators.

Methods of Interlang class:

- generateOutput : it generates the output when you already have the code generators you want to use.
- generateUis: to get all the UI generators available that matches the UI library and push them into the uiGenerators array.
- injectUis: to inject all the UI generators to the code generators.
- gets and adds.

2. Library class (Father. In case you want to add different types of libraries)

- name : name of the library.

3. Generator class (Father. In case you want to add different types of generators)

- name : name of the generator.

4. uiGen and codeGen classes (children of Generator).

5. Language class (Father. In case you want to add different types of languages)

- name : name of the language.
- version : version of the language.

6. Java, C#, Typescript and Python classes (Children of Language).

Methods(polymorphism):

- getInfo: returns message with the version of the language.

The project in visual studio created automatically the js files when I created a new ts file, but the ones that matters are the .ts

For a better visual comprehension here's the UML Diagram(InterlangUML).

![InterlangUML](https://github.com/natashaom/TechnicalTestNatasha/blob/main/InterlangUML.png)

Thanks for the time.
