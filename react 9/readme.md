### Assignment 9

#### Q: When and why do we need lazy()?
It is a new function in react that lets you load react components lazily through code splitting without help from any additional libraries. Lazy loading is the technique of rendering only-needed or critical user interface items first, then quietly unrolling the non-critical items later.
It is also known as on-demand loading because it only loads content visible on users’ screens.
<b>Benefits:</b>
- Reduces initial loading time by reducing the bundle size
- Impoves user experience at initial loading
- Reduced work for the browser
- Less bandwidth consumption

```
const OtherComponent = React.lazy(() => import('./OtherComponent'));
```

#### Q: What is suspense?
React suspense is a react component that lets components “wait” for something before rendering. Today, React Suspense only supports one use case which is loading components dynamically with React lazy(). 
```
<Suspense>
    <OtherComponent />
</Suspense>
```

#### Q: Why we got this error: A component was suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix this, updates that suspend should be wrapped with start transition? How does suspense fix this error?
React.lazy is primarily used in code splitting tools to fetch React components asynchronously on demand.
suspense lets the components "wait" for something before rendering. This error occurs when we dont wrap our lazy component with suspense.



#### Q: Advantages and Disadvantages of using this code splitting pattern?
<b>Disadvantage of code splitting</b>
- Loading the boundary:  with code-splitting, you now have boundaries where transitions will require downloading and executing a new chunk of code. This means that you’ll likely need to introduce loading indicators or develop strategies for efficient pre-loading and deal with the associated tradeoffs.

<b>Advantage of code splitting </b>
- Drastic reduction of the data which you need to download and parse in order to make the application interactive (achieving much better Time-to-Interactive).


#### Q: When do we and why do we need suspense?
we need suspense while loading the lazy component in react.
It will display the fallback while content is loading
```
<Suspense fallback={<Loading />}>
  <Albums />
</Suspense>
```
<b>Usage:</b>
- revealing content together at once
- displaying the fallback while content is loading
- indicating that a transitioning is happening 
