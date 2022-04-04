import { useState, useEffect } from "react";
import Post from "./post";
import axios from "axios";

function PostList({ postFilter, noLogin }) {

    // State
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const url   = "https://three-points.herokuapp.com/api/posts";
        const token = localStorage.getItem("token");

        axios.get(url, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => { 
                setPosts(res.data);
            })
            .catch(err => {
                noLogin();
            })
    }, []);

    if (posts.length < 1) {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
            { posts
                .filter((card) => card.text.includes(postFilter))
                .map((card) => (
                    <div className="col mb-3" key={ card.id }>
                        <Post
                            id={ card.id }
                            createdAt={ card.createdAt }
                            like={ card.likes }
                            autor={ card.author.username }
                            text={ card.text }
                            image={ card.image }
                            comments={ card.comments.length }
                            noLogin={ () => { noLogin(); } }
                        />
                    </div>
                )) }
        </div>
    );
    
}
export default PostList;