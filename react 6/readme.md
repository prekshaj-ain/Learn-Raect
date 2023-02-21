### Assignment 6

### Q: What is Microservice?
Microservices architecture (often shortened to microservices) refers to an architectural style for developing applications. Microservices allow a large application to be separated into smaller independent parts, with each part having its own realm of responsibility. To serve a single user request, a microservices-based application can call on many internal microservices to compose its response.

### Q: What is Monolith architecture?
A monolithic architecture is the traditional unified model for the design of a software program.
Monolithic applications are single-tiered, which means multiple components are combined into one large application. Consequently, they tend to have large codebases, which can be cumbersome to manage over time.

### Q: What is the difference between Monolith and Microservice?
A monolithic application is built as a single unified unit while a microservices architecture is a collection of smaller, independently deployable services.

- <b>Independently deployable</b> – Since microservices are individual units they allow for fast and easy independent deployment of individual features. 
 <b>Easy deployment</b> - One executable file or directory makes deployment easier. A small change to a monolithic application requires the redeployment of the entire monolith.
- <b>Easy debugging</b> – With all code located in one place, it’s easier to follow a request and find an issue.
 <b>Debugging challenging</b> - Each microservice has its own set of logs, which makes debugging more complicated. Plus, a single business process can run across multiple machines, further complicating debugging.
- <b>Technology flexibility</b> – Microservice architectures allow teams the freedom to select the tools they desire. 
<b>Barrier to technology adoption</b> – Any changes in the framework or language affects the entire application, making changes often expensive and time-consuming.

### Q: Why do we need a useEffect Hook?
The Effect Hook lets you perform side effects in function components
By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.

### Q: What is Shimmer UI?
Shimmer is a temporary animation placeholder for when a service call takes time to return data and we don't want to block rendering the rest of the UI.

### Q: What is the difference between JS expression and JS statement?
- <b>Javascript statement</b> - A statement is an instruction to perform a specific action. Such actions include creating a variable or a function, looping through an array of elements, evaluating code based on a specific condition etc. JavaScript programs are actually a sequence of statements.
- <b>Javascript expression</b> - Any unit of code that can be evaluated to a value is an expression. Since expressions produce values, they can appear anywhere in a program where JavaScript expects a value such as the arguments of a function invocation.

### Q: What is Conditional Rendering?
Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them. explain with a code example.
```
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
```
### Q: What is CORS?
Cross origin resource sharing.
cors mechanism that allows a server to indicate any origin other than its own from which the browser should permit loading resource.

### Q: What is async and await?
The async and await keywords enable asyncronous, promise based behavior tp be written in cleaner style
- async
Async keyword is used to declare the asynchronous function. Asynchronous function always return a promise.
await keyword is used to pause the execution of code until promise resolves or rejected.
async await is introduced in ECMA2017.

### Q: What is the use of const json = await data.json(); in getRestaurants()?
To fetch JSON from the server using the fetch() API, we need to use data.json() to get the json data as a javascript object. This is a asynchronous operation thats why we are using await.