### Assignment 12
#### q1: useContext vs Redux.
To solve the prop drilling issue, we have State Management Solutions like Context API and Redux.

| Context API | Redux  | 
| :----    | :------ | 
| Built-in tool that ships with React | Additional installation Required, driving up the final bundle size |
| Requires minimal Setup | Requires extensive setup to integrate it with a React Application |
| Specifically designed for static data, that is not often refreshed or updated | Works like a charm with both static and dynamic data |
| Adding new contexts requires creation from scratch | Easily extendible due to the ease of adding new data/actions after the initial setup |
| Debugging can be hard in highly nested React Component Structure even with Dev Tool | Incredibly powerful Redux Dev Tools to ease debugging |
| UI logic and State Management Logic are in the same component | Better code organization with separate UI logic and State Management Logic |
#### q2: Advantage of using Redux Toolkit over Redux.
Redux Toolkit includes utilities that help simplify many common use cases, including store setup, creating reducers and writing immutable update logic, and even creating entire "slices" of state at once.
 Redux Toolkit is created to eliminate the "boilerplate" from hand-written Redux logic, prevent common mistakes, and provide APIs that simplify standard Redux tasks.


#### q3: Explain Dispatcher.
Dispatches an action. This is the only way to trigger a state change.

#### q4: Explain Reducer.
`Reducers` are functions that take the current `state` and an `action` as arguments, and return a `new state` result. In other words, <b>`(state, action) => newState`</b>.

#### q5: Explain slice.
A `slice` is the portion of Redux code that relates to a specific set of data and actions within the store 's state.

#### q6: Explain selector.
A `selector` is simply a function that accepts Redux state as an argument and returns data that is derived from that state.
 A selector is not recomputed unless one of its arguments changes.

#### q7: Explain createSlice and the configuration it takes.
The `createSlice` function is used to create a store slice, a piece of the store.

The `createSlice` function takes an object as an argument, which contains the following properties:

`name`: A string that represents the name of the slice.
`initialState`: An `object` that represents the initial state of the slice. 
`reducers`: An `object` that contains the Redux reducers for the slice. Reducers are functions that take the current state and an action, and return a new state based on the action type and payload. 

Finally, the code exports the reducer for the slice using the reducer property of the slice. The reducer is responsible for managing the state of the slice and updating it in response to dispatched actions.