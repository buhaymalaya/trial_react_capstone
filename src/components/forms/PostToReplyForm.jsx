import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { Container } from "react-bootstrap";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './Toast.css'

export default function PostToReplyForm() {
    const { user } = useContext(UserContext);
    const { postId } = useParams();
    const [ post, setPost ] = useState(null);

    useEffect(() => {
        async function fetchPost() {
            try {
                const response = await fetch(`https://capstone-draft-flask.onrender.com/post/${postId}`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${user.accessToken}`,
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setPost(data);
                } else {
                    toast('Failed to fetch post:', response.statusText);
                }
            } catch (error) {
                toast('Failed to fetch post:', error.message);
            }
        }

        fetchPost();
    }, [postId, user.accessToken]);

    return (
        <Container className="about-decoy">
            <div>
                <h5>[ post reply ]</h5>
                {post ? (
                    <div className="about-decoy">
                        <h5>Title: {post.title}</h5> <hr />
                        <p>Message: {post.body}</p> <br></br> <hr />
                        <Link
                            to={`/discusslogin/loggedin/${postId}/reply`}
                            className="btn btn-primary"
                            style={{
                                backgroundColor: '#1e1e1e',
                                borderRadius: '0',
                                borderColor: 'white',
                                color: 'white'
                            }}
                        >
                            reply to topic
                        </Link>                    </div>
                ) : (
                    <p>Loading post...</p>
                )}
            </div>
        </Container>
    );
}
