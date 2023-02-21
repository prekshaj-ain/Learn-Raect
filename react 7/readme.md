### Assignment 7

#### Q: What are various ways to add images into our App? Explain with code examples.
Using the full URL of the image for the web (CDN) or any public images. Example :

``` <img src="https://reactjs.org/logo-og.png" alt="React Image" /> ```
Adding the image into the project Drag your image into your project and import it into the desired component

``` import reactLogo from "./reactLogo.png";
export default function App() {
        return <img src={reactLogo} alt="react logo" />
} 
 ```

The correct way to structure images in your project is to add them in an images folder. If you are using other assets than just images, you might want to add all in the assets folders.

``` 
import reactLogo from "../../assets/images/reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
```

#### Q: What would happen if we do console.log(useState())?
If we do console.log(useState()), we get an array [undefined, function] where first item in an array is state is undefined and the second item in an array is setState function is bound dispatchSetState.

#### Q: How will useEffect behave if we don't add a dependency array?
If we don't pass dependency array the useeffect run after every render cycle.

#### Q: What is SPA?
Single Page Application - An SPA (Single-page application) is a web app implementation that loads only a single web document.
The idea is that the website loads all the HTML/JS the first time you visit. When you then navigate, the browser will only rerender the content without refreshing the website.

#### Q: What is the difference between Client Side Routing and Server Side Routing?
- ` Client side Routing `: Only looks like routing =>  the URL chnages but no request gets sent.
When the app is loaded it happens ater server side routing.
The app will break/stop for unknown routes.

- ` Server side Routing `: Always happens first.
Tries to resolve incoming routes on server.
In case f unknown routes throws 404 message.