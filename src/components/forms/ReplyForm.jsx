import { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { Container } from "react-bootstrap";

const ReplyForm = () => {
    const { user } = useContext(UserContext);
    const { user_id, postId } = useParams(); 
    const [body, setBody] = useState('');

    const handleBodyChange = (event) => {
        setBody(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`https://capstone-draft-flask.onrender.com/post/${postId}/reply`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.accessToken}`
                },
                body: JSON.stringify({ body, "user_id": user_id, "post_id": postId }), 
            });

            if (response.ok) {
                alert('Reply submitted successfully');
            } else {
                alert('Failed to submit reply');
                console.error('Failed to submit reply:', error);

            }
        } catch (error) {
            alert('Failed to submit reply');
            console.error('Failed to submit reply:', error);

        }
    };

    return (
        <Container className="about-decoy">
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="body">Your Reply:</label><br />
                <textarea
                    id="body"
                    name="body"
                    value={body}
                    onChange={handleBodyChange}
                    required
                ></textarea>
            </div>
          
            <div>
                <button type="submit">reply</button>
            </div>
        </form>
        </Container>
    );
};

export default ReplyForm;
