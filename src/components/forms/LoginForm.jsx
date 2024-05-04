// able to obtain access token on console - 
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../contexts/UserContext'
// useState manages state wherein it returns an array [current state,
// function to update state] while useEffect performs tasks such as fetching
// API data, manually changing DOM..and has a function as arg that is
// executed after every render
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// to navigate between diff views or pages within an SPA
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './Toast.css'

export default function LoginForm() {

    const [ userLogin, setUserLogin ] = useState({ username: '', password: ''});
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate();
    
    // console.table(userLogin);

    useEffect(()=>{
        if( userLogin.username ){
            loginUser();
        }
    }, [userLogin])

    async function loginUser(){
        try {
        console.log("in login user");
        const res = await fetch('https://capstone-draft-flask.onrender.com/login', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userLogin)
        });

        if (res.ok) {
            const { access_token } = await res.json();
            console.log(access_token);
            setUser({...userLogin, accessToken: access_token})
            navigate('loggedin')
            toast.success(`User: ${userLogin.username} logged in`)
            
        } else {
            const errorMessage = await res.json(); 
            throw new Error(errorMessage);
        }
    } catch (error) {
        console.error("Login failed:", error.message);
        if (error.message && error.message.code === 401) {
            toast("Please check your username/password and try again.");
        } else {
            toast("An unexpected error occurred. Please try again later.");
        }
    }
}

    function handleLoginFormSubmit(e){
        e.preventDefault();
        toast("Login submitted. Please wait.");
        const loginElement = e.currentTarget;
        const loginForm = new FormData(loginElement);

        // console.log(loginForm.get('username'));
        setUserLogin(Object.fromEntries(loginForm));

        loginUser(userLogin);
    }
    
    return (
        <Container className="about-decoy">
            <h3>User Login</h3> <br />
            <form action="" onSubmit={handleLoginFormSubmit}>
                <label htmlFor="username">username</label><br />
                <input type="text" name='username' required /><br />
                <br />
                <label htmlFor="password">password</label><br />
                <input type="password" name='password' required /><br />
                <br />
                <button type="submit">login</button>
                <br />
            </form>
        </Container>
    )
}
