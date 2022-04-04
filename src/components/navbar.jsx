import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-light bg-light px-3">
            <div className="container-fluid">
                <Link className="btn" to="/">
                    <i className="fa-solid fa-globe"></i>
                    <span className="navbar-brand mb-0 h1 ms-2">Worldfile</span>
                </Link>
                <Link className="btn" to="/profile">
                    <i className="fa-solid fa-user"></i>
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;