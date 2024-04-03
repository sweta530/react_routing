import { useParams, useLocation } from "react-router-dom"

export default function Posts() {
    let params = useParams()
    let location = useLocation()
    return (
        <>
            <h1>Posts Page</h1>
            <h4>Pass Some postId in url</h4>
            {(params.postId) ? <h2>Post ID : {params.postId}</h2> : null}
            <h2>If redirect from Home Page check console</h2>
            {console.log(location)}
        </>
    );
}