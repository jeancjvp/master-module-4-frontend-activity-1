function Post({date, likes, author, description, img, comments}) {
    return (
        <div className="card post">
            <img src={img} className="img-fluid" alt=""/>
            <div className="card-body">
                <div className="d-flex justify-content-between mb-1">
                    <div className="gray">{date}</div>
                    <div className="btn btn-danger">
                        <i className="fa-solid fa-heart"></i>
                        <span className="ms-1">{likes}</span>
                    </div>
                </div>
                <h6 className="card-title bold mb-4">
                    <strong>{author}</strong>
                </h6>
                <p className="card-text">{description.slice(0, 150)}</p>
                <div className="gray">
                    <i className="fa-regular fa-message"></i>
                    <span className="ms-2">Comments ({comments})</span>
                </div>
            </div>
        </div>
    );
}

export default Post;