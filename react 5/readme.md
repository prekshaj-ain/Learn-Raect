### Assignment 5

#### Q1: What is the difference between Named export, Default export, and * as export?
Every module have two different types of exports -
- Named export
- Default export
You can have multiple named exports but only one default export.
` Named Exports `
export const myComp = ()=>{}
` Default Export `
export default myComp;
- Aggregating export
export * as obj from "module-name";

#### Q2: What is the importance of config.js file?
In config.js we store all the constant which we need across the project in a single place.
And we can import those if we need them.

#### Q3: What are React Hooks?
Hooks are functions !!
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
They let you use state and other React features without writing a class.

#### Q4: Why do we need useState Hook?
A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components.

The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.

`why we can't just use local variable? why state?`
1. Local Variable don't persist(retain data) between renders.
 When React renders a component for the second time, it renders it from scratch. It doesn’t consider any changes to the local variables.
2. Changes to local variable won't trigger renders.

so, how does state variable retain the data?
As a component’s memory, the state is not like a regular variable that disappears after your function returns. The state actually “lives” in React itself - outside your function component

In order to update a component with new data, two things need to happen :
1. Retain the data between renders.
2. Trigger React to re-render with new data.

The useState Hook provides those two things:
1. A state variable to retain the data between renders.
2. A state setter function to update the variable and trigger React to render the component again.
