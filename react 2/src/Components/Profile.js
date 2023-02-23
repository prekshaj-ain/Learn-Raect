import { useState } from "react";
const Profile = ()=>{
    const [count,setCount] = useState(0);
    const [count2] = useState(1);
    return (
        <>
        <h1>Profile</h1>
        <h2>Count: {count}</h2>
        <button onClick={()=>{
            setCount(count+1)
        }}>setCount</button>
        </>
    );
}
export default Profile;