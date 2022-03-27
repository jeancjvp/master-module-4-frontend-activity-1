import Post from "./post";
import postData from "../data/posts.json";

function PostList({postFilter}) {
    return (
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
            {postData
                .filter((card) => card.description.includes(postFilter))
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
export default PostList;