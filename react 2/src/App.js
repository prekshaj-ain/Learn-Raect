import React from "react"
import ReactDOM from "react-dom/client"
// Default import
import Header from "./Components/Header";
import Body from "./Components/Body"
import Footer from "./Components/Footer";

const AppLayout = ()=>(
    {
        /* 
        Header
            -logo
            -navlinks
        Body
            -searchBar
            -restaurantList
                -restaurantCard
                    -Image
                    -name
                    -rating
                    -cuisines
        Footer
        */
    }
)
function App(){
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)