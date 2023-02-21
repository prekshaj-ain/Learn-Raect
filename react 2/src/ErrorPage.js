import { useRouteError } from "react-router-dom";

const ErrorPage = ()=>{
    const {status,data} = useRouteError();
    return (
        <>
        <h2>{status}</h2>
        <h2>{data}</h2>
        </>
    )
}
export default ErrorPage;