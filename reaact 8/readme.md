### Assignment 8
#### Q: How do you create Nested Routes react-router-dom configuration?
```
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);
```
We need to tell the root route where we want it to render its child routes. We do that with `<Outlet />`.
#### Q: Read about createHashRouter, createMemoryRouter from React Router docs.
createHashRouter : This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL".
Using hash URLs is not recommended.

createMemoryRouter : Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.

#### Q: What is the order of life cycle method calls in Class Based Components?
- Firstly, constructor of the class is called. 
- Then, the render function is invoked.
- After the first render the componentDidMount will execute.
- after every render except first render the componentDidUpdate will execute.

#### Q: Why do we use componentDidMount?
The componentDidMount() method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.

#### Q: Why do we use componentWillUnmount? Show with example.
This method is called when a component is being removed from the DOM.
componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().

#### Q: (Research) Why do we use super(props) in constructor?
In JavaScript, super refers to the parent class constructor. (In our example, it points to the React.Component implementation.)

Importantly, you can’t use this in a constructor until after you’ve called the parent constructor.
```
class Checkbox extends React.Component {
  constructor(props) {
    // 🔴 Can’t use `this` yet
    super(props);
    // ✅ Now it’s okay though
    this.state = { isOn: true };
  }
  // ...
}
```
Passing props down to super is necessary so that the base React.Component constructor can initialize this.props.

#### Q: (Research) Why can't we have the callback function of useEffect async?
```
// ❌ don't do this
useEffect(async () => {
  const data = await fetchData();
}, [fetchData])
```
The issue here is that the first argument of useEffect is supposed to be a function that returns either nothing (undefined) or a function (to clean up side effects). But an async function returns a Promise, which can't be called as a function! It's simply not what the useEffect hook expects for its first argument.
```
useEffect(() => {
  // declare the data fetching function
  const fetchData = async () => {
    const data = await fetch('https://yourapi.com');
  }

  // call the function
  fetchData()
    // make sure to catch any error
    .catch(console.error);
}, [])
```