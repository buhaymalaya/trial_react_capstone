import { useContext, useRef } from "react"
import { UserContext } from "../contexts/UserContext";

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
        <form className="mb-1" onSubmit={handlePostFormSubmit}>
            <label htmlFor="title">Title</label><br />
            <input type="text" name='title' ref={titleInputRef} /><br />
            <label htmlFor="post-body">Share Your Thoughts</label><br />
            <input type="text" name='post-body' className="mb-1" ref={postBodyInputRef} required/><br />
            <input type="submit" value='post' />
        </form>
    )
}
