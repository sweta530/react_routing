import { NavLink } from "react-router-dom";
export default function Navbar() {
    return (
        <>
        <ul className="nav-bar">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <li><NavLink to='/posts'>Posts</NavLink></li>
        </ul>
        </>
    );
}