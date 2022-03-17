function NavBar() {
    return (
        <nav className="navbar navbar-light bg-light px-3">
            <div className="container-fluid">
                <div>
                    <i className="fa-solid fa-globe"></i>
                    <span className="navbar-brand mb-0 h1 ms-2">Worldfile</span>
                </div>
                <div>
                    <i className="fa-solid fa-user"></i>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;