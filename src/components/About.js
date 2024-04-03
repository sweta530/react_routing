import {Link,Outlet} from 'react-router-dom';
export default function About() {
    return (
        <>
        <h1>About Page</h1>
        <h3> <Link to='company'>company</Link></h3>
        <h3> <Link to='area'>Area</Link></h3>
        <Outlet />
        </>
    );
}