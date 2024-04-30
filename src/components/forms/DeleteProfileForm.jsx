import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

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
          alert("User deleted successfully.");
          navigate("/");
        }
      } else {
        alert("Failed to delete user. You may not be an authorized user.");
        throw new Error(`Failed to delete user: ${res.statusText}`);
      }
    } catch (error) {
      alert(`Failed to delete user: ${error.message}`);
      console.error('Failed to delete user:', error);
    }
  };

  return (
    <button type="button" onClick={deleteUser}>Delete User</button>
  );
};
