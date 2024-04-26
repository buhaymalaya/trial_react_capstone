import React, { useEffect, useState, useContext} from "react";
import { Container } from "react-bootstrap";
import { UserContext } from "./contexts/UserContext";

export default function Posts() {
    const { user } = useContext(UserContext);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPosts();
    }, []);

    async function getPosts() {
        try {
            const res = await fetch('https://capstone-draft-flask.onrender.com/postswithreplies');
            if (res.ok) {
                const data = await res.json();
                console.log(data);
                setPosts(data);
                setLoading(false);
            } else {
                console.error("Failed to load discussion board");
                setLoading(false);
            }
        } catch (error) {
            console.error("Failed to load discussion board:", error);
            setLoading(false);
        }
    }

    return (
        <Container className="about-decoy">
            <h5>[ Discussion Board ]</h5>
            <hr />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table className="discussion-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Published</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(post => (
                            <React.Fragment key={post.id}>
                                <tr className="post">
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                    <td>{post.time_created}</td> 
                                </tr>
                                <tr>
                                    <td className="vertical-line"></td>
                                    <td className="vertical-line"></td>
                                    <td className="vertical-line"></td>
                                </tr>
                                {post.replies.map(reply => (
                                    <React.Fragment key={`reply-${reply.id}`}>
                                        <tr className="reply">
                                            <td colSpan="3">{reply.body}</td>
                                        </tr>
                                        <tr>
                                            <td className="vertical-line"></td>
                                            <td className="vertical-line"></td>
                                            <td className="vertical-line"></td>
                                        </tr>
                                    </React.Fragment>
                                ))}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            )}
        </Container>
    );
    
}
