# Test one  
> Concept of linting  

Linting is checking the code for some errors before compiling, the errors can be some programming errors and style errors. It can help to prevent some potential errors.  

> Understanding of promises and at least an idea of async/await and why they're used over promises

A promise is an object. It will give a result of an asynchronous function some time in the future. After the operation, it can resolve a value or reject and indicate the error.   
After the asynchronous operation, we need to do something with the result -- resolve or reject. Promise provides us a with good way to do with this.

> Why do we need states in applications?


State is an object that can hold the properties (of a component). In an application, the properties of a component can change during their life cycle, so we need the state of the component to hold this information and then control the behavior of the component. For example, after an asynchronous function, we might need to render the component again to update it, the state can help us better manage such information of the component.

> Why do we need global state management with something like Redux

Global state management is useful in cases like, the way the user uses the application is complex; different users might have different ways to use the application; collaborations exist among users; a view might get data from different sources.  

> What is cascading in CSS and what problem does styled components or similar CSS in JS solutions solve

In CSS, cascading means that there can be multiple stylesheets applied to a piece of the HTML, so we have to decide which stylesheet is used for which piece of HTML. For example, the rules may tell you to use blue for h1 somewhere, and use red elsewhere. CSS helps us to decide what color to use.  
In JavaScript, cascading is the chaining method.  

> What is scoping in JS?

JavaScript has two types of scope: local scope and global scope.
Local scope is for the variables defined within a function. They are scoped inside just the fucntion, so different fucntions can have varaibles with the same name.  
Global scope is when you are writing JavaScript code in the docuement. The varaible of global scope are scoped all throughout the document.  

> What is lexical scope?

Lexical scope means that the variable can only be called from the block of code where it is defined, therefore, the scope of the varaible is determiend during compile time.  

> What is the idea of immutability or immutable state

Immutable state means that the properties of the state cannot be changed.
In react, to maintain immutability, we can use the following methods like Object.assign or Object Spread.
