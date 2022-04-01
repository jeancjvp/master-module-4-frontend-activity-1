import React from "react";
import Post from "./post";
import postData from "../data/posts.json";
import axios from "axios";

class PostList extends React.Component {
    // State
    state = {
        posts: []
    }

    componentDidMount() {
		const url = "https://three-points.herokuapp.com/api/posts";
        const token = localStorage.getItem("token");

        axios.get(url, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => { 
                this.setState({ posts: postData });
            })
            .catch(err => {
                this.props.noLogin();
            })
	}

    render() {
        if (this.state.posts.length < 1) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                {this.state.posts
                    .filter((card) => card.description.includes(this.props.postFilter))
                    .map((card) => (
                        <div className="col mb-3" key={card.id}>
                            <Post
                                createdAt={card.date}
                                likes={card.likes}
                                autor={card.author}
                                text={card.description}
                                image={card.img}
                                comments={card.comments}
                            />
                        </div>
                    ))}
            </div>
        );
    }
    
}
export default PostList;