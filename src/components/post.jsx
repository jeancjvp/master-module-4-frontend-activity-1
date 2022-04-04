import { useState, useEffect } from "react";
import axios from "axios";

function Post({ id, createdAt, like, autor, text, image, comments, noLogin }) {

    // State
    const [likes, setLikes] = useState(like);

    useEffect(() => {
        // Post
        const url   = `https://three-points.herokuapp.com/api/posts/${id}/like`;
        const token = localStorage.getItem("token");

        axios.post(url, {}, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => { })
            .catch(err => { 
                noLogin(); 
            })
    }, [likes]);

    return (
        <div className="card post">
            <img src={ image } className="img-fluid" alt=""/>
            <div className="card-body">
                <div className="d-flex justify-content-between mb-1">
                    <div className="gray">{ createdAt }</div>
                    <div className="btn btn-danger" onClick={ () => { setLikes(likes + 1); } }>
                        <i className="fa-solid fa-heart"></i>
                        <span className="ms-1"> { likes }</span>
                    </div>
                </div>
                <h6 className="card-title bold mb-4">
                    <strong>{ autor }</strong>
                </h6>
                <p className="card-text">{ text.slice(0, 150) }...</p>
                <div className="gray">
                    <i className="fa-regular fa-message"></i>
                    <span className="ms-2">Comments ({ comments })</span>
                </div>
            </div>
        </div>
    );
}

export default Post;