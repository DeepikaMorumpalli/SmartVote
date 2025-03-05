import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <>
            <header>
                <div className="logo">
                    <Link to={'/welcome'}>SmartVote</Link>
                </div>
                <div className="links">
                    <Link to={'/register'}>New Registration</Link>
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/admin'}>Admin</Link>
                </div>
            </header>
        </>
    )
}