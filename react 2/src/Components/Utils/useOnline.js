import { useEffect, useState } from "react";

const useOnline = ()=>{
    const [isOnline,setIsOnline] = useState(true);
    useEffect(()=>{
        const checkOnline = ()=>{
            setIsOnline(true);
        };
        const checkOffline = ()=>{
            setIsOnline(false);
        };
        addEventListener('online',checkOnline);
        addEventListener('offline',checkOffline);
        return ()=>{
            removeEventListener("online",checkOffline);
            removeEventListener("offline",checkOnline);
        }
    },[])
    // return the status
    return isOnline;
}
export default useOnline