function Profile({ avatar, userName, bio, onLogout }) {

    // Submit Handler
    function handleSubmit(event) {
        event.preventDefault();
        onLogout();
    }

    return (
        <div id="profile" className="justify-content-center my-4 p-3 text-center">
            <img src={ avatar } className="img-fluid profile-img rounded-circle mb-3" alt=""/>
            <div>
                <p className="h5 mb-4">{ userName }</p>
                <p>{ bio }</p>
            </div>
            <button type="submit" className="btn btn-primary my-2 submit" onClick={ handleSubmit }>Salir</button>
        </div>
    );
}

export default Profile;