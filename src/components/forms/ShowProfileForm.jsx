import { useState, useEffect, useContext } from "react";
import { Container, Table } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";

export default function ShowProfileForm() {
    const { user } = useContext(UserContext);
    const [formUser, setFormUser] = useState(null);

    useEffect(() => {
        getUserInfo();
    }, []); // Fetch user info when component mounts

    async function getUserInfo() {
        try {
            const res = await fetch(
                `https://capstone-draft-flask.onrender.com/user/${user.username}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (res.ok) {
                const userData = await res.json();
                setFormUser(userData); // Set formUser state with fetched user data
            } else {
                console.error("Failed to fetch user information.");
            }
        } catch (error) {
            console.error("Failed to fetch user information:", error.message);
        }
    }

    if (!formUser) {
        return <div>Loading...</div>;
    }

    return (
        <Container className="about-decoy">
            <h5>[ Your Profile ]</h5> <hr />
            <Table striped bordered hover>
                <tbody>
                    {Object.entries(formUser).map(([key, value]) => (
                        <tr key={key}>
                            <td style={{ backgroundColor: 'darkgray', color: 'white' }}>{key}</td>
                            <td style={{ backgroundColor: 'darkgray', color: 'white' }}>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
