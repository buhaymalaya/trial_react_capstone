import { useEffect, useState, useContext } from "react"
// import Spinner from "react-bootstrap/Spinner";
import { Container } from "react-bootstrap";
import { UserContext } from "./contexts/UserContext";

export default function Posts() {
    const { user } = useContext(UserContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            await getPosts();
        })()
    }, [])

    async function getPosts() {
        console.log('retrieving all threads');
        const res = await fetch('https://capstone-draft-flask.onrender.com/post', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                // Authorization: `Bearer ${user.accessToken}`
            },
            body: JSON.stringify()
        })
        if (res.ok) {
            const data = await res.json();
            console.log(data);
            setPosts(data);
        } else console.error("Failed to load discussion board")
    }

    if ( posts.length === 0 ) return 

    return (
      
            <Container className="about-decoy">
                <h2>Discussion Board</h2>
                {posts ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Body</th>
                                <th>Date/Time Created</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map(post => (
                                <tr key={post.id}>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                    <td>{post.time_created}</td> 
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Loading...</p>
                )}
            </Container>
        )
        
    
}
