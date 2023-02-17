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


### Q8: Why we need keys in react? When do we need keys in react?


### Q9: Can we use index as keys?


### Q10: What is props in react? ways to pass props?


### Q11: What is config driven UI?

