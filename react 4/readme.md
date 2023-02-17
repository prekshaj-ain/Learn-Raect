## Assignment 4 

### Q1: Is JSX mandatory in react?
No, We can write react without jsx. Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children). So, anything you can do with JSX can also be done with just plain JavaScript.   

### Q2: Is Es6 manadatory in react?
No, you can use react without es6 classes.If you don’t use ES6 yet, you may use the create-react-class.

### Q3: How can I write comments in JSX?
similar to regular javascript

### Q4: What is React.Fragment?
Fragments let you group a list of children without adding extra nodes to the DOM.
A espace from div hell.
#### ` Syntax `
<React.Fragment></React.Fragment> - you can also pass key props to this.
<></> - new shorter syntax but you cant pass key props to this.

``` 
<dl>
      {props.items.map(item => (
        // Without the `key`, React will fire a key warning
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
</dl>
 ```
We can use Raect.Fragment inside React.Fragment

### Q5: What is Virtual DOM?
Virtual DOM is a programming concept, it is not invented by react developers where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.

It’s better to think of the virtual DOM as React’s local and simplified copy of the HTML DOM,  but it lacks the real thing’s power to directly change what’s on the screen.


### ` Why virtual dom when we have real dom? `
DOM manipulation is the heart of the modern, interactive web. Unfortunately, it is also a lot slower than most JavaScript operations.
Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen. Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.

### ` How it's done`
 - When you render a JSX element, every single virtual DOM object gets updated so quickly.
 - Once the virtual DOM has updated, then React compares the virtual DOM with a virtual DOM snapshot that was taken right before the update.
 - By comparing the new virtual DOM with a pre-update version, React figures out exactly which virtual DOM objects have changed. This process is called “diffing.”
 - Once React knows which virtual DOM objects have changed, then React updates those objects, and only those objects, on the real DOM.
 - This makes a big difference! React can update only the necessary parts of the DOM. React is awesome right! :sunglasses:



### Q6: What is Reconciliation in react?
The mechanism to diff one tree with another to determine which parts need to be chnaged and then update the real DOM is called reconciliation.

### Q7: What is React Fiber?
Fiber is the new reconciliation engine in React 16.
React Fiber is an internal engine change that allows React to break the limits of the call stack. It’s creation enables React to pause/start rendering work at will. Eventually, React users will be able to hint at the “priority” of work.
With Fiber, React can pause and resume work at will to get working on what matters as soon as possible! ?
React Fiber is a concept of ReactJS that is used to render a system faster and smoother.

### Q8: Why we need keys in react? When do we need keys in react?
Key is the very special property that plays a role in very core of react - the diffing algorithm
Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.
lets see an example
```
<ul>
  <li>One</li>
  <li>Two</li>
</ul>

<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>

```
Lets see how diffing algorithm works here - React first compares the first 2 items from both the trees and it notices they are same and only third item is new then just inserts it.
Now if we add the item in the first position rather than last what will happen.
react compares the items in the same position and find them different so it basically generates a new tree but this is not what we want.
the solution provide unique keys - it tells react which element are same and which are new.

### Q9: Can we use index as keys?
yes, we can use index as keys but it is not preferred at all. you can use index as keys if
1. Data is static.
2. When you know reordering of lists: Sorting, Filtering is not going to happen.
3. In the absence of an id.
But never use index and on the spot generated random numbers but it kills the purpose of keys.
let's see through example
```
<ul>
  <li key=0>One</li>
  <li key=1>Two</li>
</ul>
```
suppose we add the new item to the top of list now key of all the items changes and react will re-render all the items that's not what we want, same goes to delete and re-order.
### Q10: What is props in react?
We use props to pass data from one component to another (from parent to child components).
Props is the shorter name for properties. They are useful when you want the flow of data in your app to be dynamic.
```
function Tool(props) {
  const name = props.name;
  const tool = props.tool;
    return (
      <div>
        <h1>My name is {name}.</h1>
        <p>My favorite design tool is {tool}.</p>
      </div>
    );
}

export default Tool
```
At the end what is components? functions right!, so what are props yes you guessed it right, they are arguments.

### Q11: What is config driven UI?
Config Driven UI are based on the configurations of the data application receives. It is rather a good practice to use config driven UIs to make application for dynamic. It is a very common & basic approach to interact with the User. It provides a generic interface to develop things which help your project scale well. It saves a lot of development time and effort. A typical login form, common in most of the Apps. Most of these forms also get frequent updates as the requirements increase in terms of Form Validations, dropdown options,.. or design changes.