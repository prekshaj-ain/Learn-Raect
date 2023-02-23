import {Component} from "react"
import { Outlet } from "react-router-dom";
class About extends Component{
    render(){
        return (
            <>
                <h2>About</h2>
                <Outlet />
            </>
        )
    }
}

export default About;