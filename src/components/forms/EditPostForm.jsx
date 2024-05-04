import { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../contexts/UserContext';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './Toast.css'


export default function EditPostForm() { 
    const { user } = useContext(UserContext);
    const { postId } = useParams();
    const [newContent, setNewContent] = useState('');
    const [postTitle, setPostTitle] = useState('');

    const handleInputChange = (event) => {
        setNewContent(event.target.value);
    };

    const handleTitleChange = (event) => {
        setPostTitle(event.target.value);
    };

    

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await fetch(`https://capstone-draft-flask.onrender.com/post/${postId}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.accessToken}`, 
                },
                body: JSON.stringify({ "title": postTitle, "body": newContent }),
            });
            if (res.ok) {
                toast.success("Post updated successfully.");
                console.log('Post updated successfully');
            } else {
                toast("Failed to update post. You may not be an authorized user.");
                console.error('Failed to update post:', res.statusText);
            }
        } catch (error) {
            toast("Failed to update post. Try again.");
            console.error('Failed to update post:', error.message);
        }
    };

    return (
        <Container className='about-decoy'>
            <form onSubmit={handleSubmit}>
                <h5>[ update post ]</h5> <hr />
                <p>NOTE: You are only able to update the post if you are the author.</p>

                <input 
                    type="text" 
                    value={postTitle} 
                    onChange={handleTitleChange} 
                    placeholder="Enter post title" 
                />
                <br /> <br />
                <textarea 
                    value={newContent} 
                    onChange={handleInputChange} 
                    placeholder="Enter post content" 
                /> 
                <br /> <br />
                <button type="submit">update post</button>
            </form>
        </Container>
    );
};
