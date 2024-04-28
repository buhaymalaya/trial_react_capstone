import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useParams } from 'react-router-dom';

export default function DeletePostForm() {
  const { user } = useContext(UserContext);
  const { postId } = useParams();

  const handleDelete = async () => {
    try {
      const res = await fetch(`https://capstone-draft-flask.onrender.com/post/${postId}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.accessToken}`, 
        },
      });
      if (res.ok) {
        alert("Post deleted successfully.");
      } else {
        alert("Failed to delete post. You may not be an authorized user.");
        throw new Error(`Failed to delete post: ${res.statusText}`);
      }
    } catch (error) {
      alert(`Failed to delete post: ${error.message}`);
      console.error('Failed to delete post:', error);
    }
  };

  return (
    <button type="button" onClick={handleDelete}>delete post</button>
  );
};

