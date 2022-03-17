import Post from "./post";
import data from "../data/profiles.json";

function PostList() {
    return (
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
            {data.map((card, i) => (
                <div className="col mb-3" key={i}>
                    <Post
                        date={card.date}
                        likes={card.likes}
                        author={card.author}
                        description={card.description}
                        img={card.img}
                        comments={card.comments}
                    />
                </div>
            ))}
        </div>
    );
}

export default PostList;