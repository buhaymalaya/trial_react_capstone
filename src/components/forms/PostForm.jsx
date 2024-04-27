import { useContext, useRef } from "react"
import { UserContext } from "../contexts/UserContext";
import { Container } from "react-bootstrap";

export default function PostForm() {

    const { user } = useContext(UserContext);

    const titleInputRef = useRef(null);
    const postBodyInputRef = useRef(null);

    async function sendPost(postOb){

        console.log(postOb, 'from send post');
        const res = await fetch('https://capstone-draft-flask.onrender.com/post',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.accessToken}`
            },
            body: JSON.stringify(postOb)
        })
        if( res.ok ){
            const data = await res.json()
            console.log(data);
            alert("Thread Created");
            clearPostForm();
        }
    }

    function handlePostFormSubmit(e) {
        e.preventDefault()
        const postOb = {
            title: titleInputRef.current.value,
            body: postBodyInputRef.current.value,
        }
        sendPost(postOb)
    }

    function clearPostForm(){
        titleInputRef.current.value = '';
        postBodyInputRef.current.value = null;
    }

    return (
        <Container className="about-decoy">
        <form className="mb-1" onSubmit={handlePostFormSubmit}>
                <p> [ Community Guidelines: Please be respectful and practice empathy. ]</p>
            <hr />
            <label htmlFor="title">Title</label><br />
            <input type="text" name='title' ref={titleInputRef} style={{ width: '100%', padding: '8px', marginBottom: '16px' }} /><br />
            <label htmlFor="post-body">Share Your Thoughts</label><br />
            <textarea name="post-body" className="mb-1" ref={postBodyInputRef} style={{ width: '100%', height: '150px', padding: '8px' }} required></textarea><br />
            <input type="submit" value='post' style={{ padding: '5px 10px', marginTop: '16px' }} />
        </form>

        </Container>
    )
    
}
