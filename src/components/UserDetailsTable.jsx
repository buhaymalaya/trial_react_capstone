import { useEffect, useState, useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import { Table } from 'react-bootstrap';

export default function UserDetailsTable() {
    const { user } = useContext(UserContext); 
    const [userData, setUserData] = useState('');
    const { username } = user.username

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`https://capstone-draft-flask.onrender.com/user/${username}`, {
                    method: "GET" 
                });
                if (response.ok) {
                    const data = await response.json();
                    setUserData(data);
                } else {
                    console.error('Failed to fetch user data:', response.statusText);
                }
            } catch (error) {
                console.error('Failed to fetch user data:', error.message);
            }
        };

        if (user && username) { 
            fetchUserData();
        }
    }, [user]); 

    if (!userData) {
        return <div>Loading...</div>; 
    }

    return (
        <Table>
            <tbody>
                <tr>
                    <td>Username:</td>
                    <td>{userData.username}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>{userData.email}</td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td>********</td> 
                </tr>
                <tr>
                    <td>First Name:</td>
                    <td>{userData.first_name}</td>
                </tr>
                <tr>
                    <td>Last Name:</td>
                    <td>{userData.last_name}</td>
                </tr>
                <tr>
                    <td>Zip Code:</td>
                    <td>{userData.zip_code}</td>
                </tr>
            </tbody>
        </Table>
    );
}
