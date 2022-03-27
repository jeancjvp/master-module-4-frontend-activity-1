import React from "react";

class Post extends React.Component {
    // State
    state = {
        likes: this.props.likes,
    };

    // Increment Likes State
    incrementLikes() {
        this.setState({ likes: (this.state.likes + 1)});
    }

    render() {
        return (
            <div className="card post">
                <img src={this.props.image} className="img-fluid" alt=""/>
                <div className="card-body">
                    <div className="d-flex justify-content-between mb-1">
                        <div className="gray">{this.props.createdAt}</div>
                        <div className="btn btn-danger" onClick={() => { this.incrementLikes() } }>
                            <i className="fa-solid fa-heart"></i>
                            <span className="ms-1"> {this.state.likes}</span>
                        </div>
                    </div>
                    <h6 className="card-title bold mb-4">
                        <strong>{this.props.autor}</strong>
                    </h6>
                    <p className="card-text">{this.props.text.slice(0, 150)}...</p>
                    <div className="gray">
                        <i className="fa-regular fa-message"></i>
                        <span className="ms-2">Comments ({this.props.comments})</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;