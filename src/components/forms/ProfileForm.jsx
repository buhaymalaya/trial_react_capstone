import { useState, useEffect, useContext, useRef } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function ProfileForm() {
    const { user } = useContext(UserContext);
    const username = user.username

    const [formUser, setFormUser] = useState({
        username: user.username,
        email: user.email,
        password: "",
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        zip_code: user.zip_code || "",

    });

    

    async function updateUser() {
        try {
            const res = await fetch(
                `https://capstone-draft-flask.onrender.com/user/${username}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${user.accessToken}`,
                    },
                    body: JSON.stringify(formUser),
                }
            );
            if (res.ok) {
                const data = await res.json();
                console.log(data);
                alert("Profile updated successfully.");
            } else {
                console.error("Update failed. Please try again");
            }
        } catch (error) {
            console.error("Update failed. Please try again:", error.message);
            alert("Profile updated successfully.");

        }
    }

    
    

    function handleUpdateFormSubmit(e) {
        e.preventDefault();
        updateUser();
    }

    

    return (
       
        <Container className="about-decoy">
            <h5>Edit Your Profile</h5> <hr />
            <form onSubmit={handleUpdateFormSubmit}>
 
    <label htmlFor="username">Username:</label>
    <input
        type="text"
        name="username"
        value={formUser.username || ""}
        onChange={(e) => setFormUser({ ...formUser, username: e.target.value })}
        required
    />

    <hr />
    <label htmlFor="email">Email:</label>
    <input
        type="email"
        name="email"
        value={formUser.email || ""}
        onChange={(e) => setFormUser({ ...formUser, email: e.target.value })}
        required
    />

    <hr />
    <label htmlFor="password">Current Password:</label>
    <input
        type="password"
        name="password"
        value={formUser.password || ""}
        onChange={(e) => setFormUser({ ...formUser, password: e.target.value })}
        required
    />   

    <hr />
    <label htmlFor="first-name">First Name:</label>
    <input
        type="text"
        name="first-name"
        value={formUser.first_name || ""}
        onChange={(e) => setFormUser({ ...formUser, first_name: e.target.value })}
    />

    <hr />
    <label htmlFor="last-name">Last Name:</label>
    <input
        type="text"
        name="last-name"
        value={formUser.last_name || ""}
        onChange={(e) => setFormUser({ ...formUser, last_name: e.target.value })}
    />

    <hr />
    <label htmlFor="zip-code">Zip Code:</label>
    <input
        type="integer"
        name="zip-code"
        value={formUser.zip_code || ""}
        onChange={(e) => setFormUser({ ...formUser, zip_code: e.target.value })}
    />

    <hr />
    <button type="submit">update profile</button>
</form>



        </Container>
    );
}
