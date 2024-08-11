import React, { useEffect, useState, useContext } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom"; // 
import { UserContext } from "./contexts/UserContext";

export default function Posts() {
    const { user } = useContext(UserContext);
    // const username = user.username;
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
                <Table striped bordered hover className="discussion-table">
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: "#1e1e1e", color: "white", borderColor: "white" }}>UserID</th>
                            <th style={{ backgroundColor: "#1e1e1e", color: "white", borderColor: "white"  }}>Title</th>
                            <th style={{ backgroundColor: "#1e1e1e", color: "white", borderColor: "white"  }}>Body</th>
                            <th style={{ backgroundColor: "#1e1e1e", color: "white", borderColor: "white"  }}>Published</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(post => (
                            <React.Fragment key={post.id}>
                                <tr className="post">
                                    <td style={{ backgroundColor: "#1e1e1e", color: "white", borderColor: "white"  }}>{post.user_id}</td>
                                    <td style={{ backgroundColor: "#1e1e1e", color: "white", borderColor: "white"  }}>
                                        <Link to={`/discusslogin/loggedin/${post.id}`} style={{ textDecoration: "none" }}>{post.title}</Link>
                                    </td>
                                    <td style={{ backgroundColor: "#1e1e1e", color: "white", borderColor: "white"  }}>{post.body}</td>
                                    <td style={{ backgroundColor: "#1e1e1e", color: "gray", borderColor: "white"  }}>{post.time_created}</td> 
                                </tr>
                                {post.replies.map(reply => (
                                    <tr key={`reply-${reply.id}`} className="reply" >
                                        <td style={{backgroundColor: "#1e1e1e", color: "gray", borderColor: "white"}}>{reply.user_id}</td>
                                        <td colSpan="4" style={{ fontStyle: "italic", backgroundColor: "#1e1e1e", color: "gray", borderColor: "white"  }}>{reply.body}</td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
    );
}