# Assignment 3 Foundation of react

#### Q1:What is JSX?
JSX is a syntax extension for javascript that lets you write <b>HTML LIKE SYNTAX</b> in javascript file.

` JSX and React are two separate things. They’re often used together, but you can use them independently of each other. JSX is a syntax extension, while React is a JavaScript library. `


### Q2:Superpowers of JSX?
- You can put any valid JavaScript expression inside the curly braces in JSX.
- JSX Prevents Injection Attacks
` It is safe to embed user input in JSX.
By default, React DOM escapes any values before rendering them. Thus it ensures that you can never inject anthing that is not explicitely written in your application.
Everyting is converted to string before being rendered. `
  

### Q3:Components in JSX?
As the web became more interactive, logic increasingly determined content. Javascript was in charge of HTML.
this is why-
` In react, rendering logic and markup live together in a same place - Components  `
Components are reusable UI elements for your app

##### Function and class based components
Function Components are literally javascript functions.
``` 
function Welcome(props){
    return <h1>Hello, {props.name}</h1>
} 
```


### Q4: What is Babel?
Babel is the compiler that translate one type of code to another, that's why it is a transpiler ` translate + compile `.
When we write JSX it then converted to React.createElement by babel. This gives us object which then converts to HTML dom.

It is needed for 2 main tasks:
1. To compile JSX into React.createElement.
2. To compile latest javascript into the code most browser can understand ` Transpiling `.

### Q5: {TitleComponent} vs {< TitleComponent />} vs {< TitleComponent ></ TitleComponent>} ?

` {TitleComponent} ` anything enclosed in cirly braces are treated as javascript code. TitleComponent is a element or variable.

```
const TitleComponent = <h1>React is powerful</h1>;
```
or
```
const TitleComponent = "React is awesome";
```

` {<TitleComponent />} ` here TitleComponent is a react component which doesnot have any children. this is returning some JSX expression.

```
const TitleComponent = function(){
    return (
        <h1>React is developed by meta developers.</h1>
    )
}
```
` {<TitleComponent></TitleComponent>} ` it is same as above but it can have children between opening and closing tag.

```
const TitleComponent = function(props){
    return (
        <h1>{props.children}</h1>
    )
}
```
### q6: what is optional chaining?
The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.