import React from "react";
class Profile extends React.Component{
    constructor(props){
        console.log("constructor");
        super(props);
        this.state = {
            count: 0,
            count2: 0
        };
    }
    componentDidMount(){
        // called after first render
        // Api calls 
        console.log("componentDidMount")
    }
    componentDidUpdate(){
        // called after every next render
        console.log("componentDidUpdate")
    }
    componentWillUnmount(){
        // component cleanup
        // when we leave the component
        console.log("componentWillUnmount");
    }
    // render returns jsx
    render(){
        console.log("render");
        const {count} = this.state;
        return (
            <>
            <h1>ProfileClass</h1>
            <h2>{this.props.name}</h2>
            <h2>Count: {count}</h2>
            <button onClick={()=>{
                this.setState({
                    count: count+1,
                })
            }}>SetCount</button>
            </>
        )
    }
}
export default Profile;