import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './Toast.css'

export default function DeleteProfileForm() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate(); 

  const deleteUser = async () => {
    try {
      const username = user.username;
      console.log("Username:", username);

      const res = await fetch(`https://capstone-draft-flask.onrender.com/user/${username}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.accessToken}`, 
        },
      });
      
      if (res.ok) {
        const confirmation = window.confirm(
          "Are you sure you want to delete your account? This action cannot be undone."
        );
        if (confirmation) {
          toast.success("User deleted successfully.");
          navigate("/");
        }
      } else {
        toast("Failed to delete account. You may not be an authorized user.");
        throw new Error(`Failed to delete user: ${res.statusText}`);
      }
    } catch (error) {
      toast("Failed to delete account: You may have posted a thread or reply on the discussion board.");
      console.error('Failed to delete user:', error);
    }
  };

  return (
    <Container className='about-decoy'>
    <h5>[ Delete Profile ]</h5> <br />
    <p>NOTE: You are only able to delete your account if you have not posted a thread or reply on the discussion board.</p> <hr />

    <button type="button" onClick={deleteUser}>delete account</button>
    </Container>
  );
};
