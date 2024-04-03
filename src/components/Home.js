import {useNavigate, Link} from 'react-router-dom';
export default function Home() {
    let navigate = useNavigate();
    return (
        <>
        <h1>Home Page</h1>
        <button onClick={()=>navigate('/about')}>About us page</button> <br/>
        <Link to='/posts' state={{title: "Post title", description : "Post details"}} >Posts</Link>
        </>
    );
}