import React from "react"
import ReactDOM, { createRoot } from "react-dom/client"

const Header = ()=> (
    <div className="title">
        <h1 id="heading">Heading 1</h1>
        <h1 id="heading">Heading 2</h1>
        <h1 id="heading">Heading 3</h1>
    </div>
)
function App(){
    return <Header />
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)