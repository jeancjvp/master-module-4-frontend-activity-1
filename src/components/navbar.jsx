function NavBar({onLogoClick, onProfileClick}) {
    return (
        <nav className="navbar navbar-light bg-light px-3">
            <div className="container-fluid">
                <div className="btn" onClick={ () => { onLogoClick() } }>
                    <i className="fa-solid fa-globe"></i>
                    <span className="navbar-brand mb-0 h1 ms-2">Worldfile</span>
                </div>
                <div className="btn" onClick={ () => { onProfileClick() } }>
                    <i className="fa-solid fa-user"></i>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;