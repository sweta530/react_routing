import { useSearchParams } from "react-router-dom";
export default function Contact() {
    let [searchParam,setSearchParam] = useSearchParams();
    return (
        <>
            <h1>Contact Page</h1>
            <button onClick={()=> setSearchParam({age : 25})}>set Search Param</button>
            <h3>age : {searchParam.get('age')}</h3>
        </>
    );
}