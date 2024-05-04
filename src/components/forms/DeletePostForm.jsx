import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './Toast.css'

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
        toast.success("Post deleted successfully.");
      } else {
        toast("Failed to delete post. You may not be an authorized user.");
        throw new Error(`Failed to delete post: ${res.statusText}`);
      }
    } catch (error) {
      toast(`Failed to delete post: ${error.message}`);
      console.error('Failed to delete post:', error);
    }
  };

  return (
    <div>
      <hr />
    <p>NOTE: You are only able to delete the post if you are the author.</p>
    <button type="button" onClick={handleDelete}>delete post</button>
    
</div>
  );
};

