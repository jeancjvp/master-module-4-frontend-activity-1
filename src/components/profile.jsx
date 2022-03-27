function Profile({avatar, userName, bio}) {
    return (
        <div id="profile" className="justify-content-center my-4 p-3 text-center">
            <img src={avatar} className="img-fluid profile-img rounded-circle mb-3" alt=""/>
            <div>
                <p className="h5 mb-4">{userName}</p>
                <p>{bio}</p>
            </div>
        </div>
    );
}

export default Profile;