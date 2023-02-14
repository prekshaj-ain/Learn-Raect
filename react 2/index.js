import React from "react"
import ReactDOM from "react-dom/client"

const heading1 = React.createElement("h3",{id:"heading"},"Hare krishna");
const heading2 = React.createElement("h3",{id:"heading2"},"Hare Ram"); 
const container = React.createElement("div",{},[heading1,heading2]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);