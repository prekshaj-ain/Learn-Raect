import React from "react"
import ReactDOM from "react-dom/client"
// Default import
import Header from "./Components/Header";
import Body from "./Components/Body"
import Footer from "./Components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ErrorPage from "./ErrorPage";
import SingleRestaurant from "./Components/SingleRestaurant";
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
            <Outlet />
            <Footer />
        </>
    )
}
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children:[
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/About",
                element: <About />
            },
            {
                path: "/Contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:id",
                element: <SingleRestaurant />
            }

        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />)