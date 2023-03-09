### Assignment 11

#### Q1: What is prop drilling?
In a traditional React application, data is often shared between components using props. Manually sharing this data can be hectic, especially when shared between multiple nested components. Also, sharing data between two child components can be cumbersome. Hence the need for global state management.

Prop drilling is a situation where data is passed from one component through multiple interdependent components until you get to the component where the data is needed.

#### Q2: What is lifting the state up?
Lifting state up is an important pattern for React developers because sometimes we have state that's located within a particular component that also needs to be shared with sibling components.

Instead of using an entire state management library like Redux or React Context, we can just lift the state up to the closest common ancestor and pass both the state variables the state values down as well as any callbacks to update that state.

#### Q3: What is Context Provider and Context Consumer?
The context API uses a provider to pass data to its child components. You will have to wrap all components with a provider component.
```
<AuthContext.Provider value={...}>
	<ParentComponent/>
<AuthContext.Provider>
 ```
Context Provider overrides the default value with the povided value.

we use useContext to use the value of context in functional component. useContext is a hook we cant use it in class based component. we can use context consumer which requires a function as a child. The function receives the current context value and returns a React node.
```
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
 ```

#### Q4: If you don’t pass a value to the provider does it take the default value?
No, default value is not passed as value to components when we don't pass a value to the provider. React throws an error in that case. If we don't need to pass value then value={undefined} must be mentioned in provider.

The defaultValue argument is only used when a component does not have a matching Provider above it in the tree