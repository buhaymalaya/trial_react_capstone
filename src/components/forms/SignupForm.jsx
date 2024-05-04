import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './Toast.css'


export default function SignupForm() {

  const [user, setUser] = useState({});
  const navigate = useNavigate();

  console.log(user);

  async function registerUser(){
    const res = await fetch('https://capstone-draft-flask.onrender.com/user',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user) 
    })
    if (res.ok){
      const data = await res.json();
      console.log(data);
      navigate('/login')
    } else 
    console.error("Sign up failed. Please try again")
    toast("Sign up failed. Please try again")
  }

  function handleRegisterFormSubmit(e) {
    e.preventDefault();

    if (user.password !== user.confirmPassword ) {
      toast("Passwords must match. Please try again.")
      return;
    }
    delete user.confirmPassword;
    console.log(user, 'submitted');
    console.log("submitting form");
    registerUser();
    toast("Account created successfully. Log in to access Intake tool and Discussion Board.")

  }

  return (
    <Container className="about-decoy">
      
      <h5>Sign Up for a Free Account 
        <br /> <br /> [caution: use a safe email address or create a new one if needed]</h5>         <br /> 

      <form action="" onSubmit={handleRegisterFormSubmit}>

        <label htmlFor="username">username:</label><br />
        <input type="text" name='username' value={user.username} onChange={(e) => { setUser({ ...user, username: e.target.value }) }} required/><br />
        <br /> 
        <label htmlFor="email">email:</label><br />
        <input type="text" name='email' value={user.email} onChange={(e) => { setUser({ ...user, email: e.target.value }) }} required/><br />
        <br /> 
        <label htmlFor="password">password:</label><br />
        <input type="password" name='password' value={user.password} onChange={(e) => { setUser({ ...user, password: e.target.value }) }} required/><br />
        <br /> 
        <label htmlFor="confirm-password">confirm password:</label><br />
        <input type="password" name='confirm-password' onChange={(e) => { setUser({ ...user, confirmPassword: e.target.value }) }} value={user.confirmPassword} required/><br />
        <br /> 
        <label htmlFor="first-name">first name:</label><br />
        <input type="text" name='first-name' value={user.first_name} onChange={(e) => { setUser({ ...user, first_name: e.target.value }) }} /><br />
        <br /> 
        <label htmlFor="last-name">last name:</label><br />
        <input type="text" name='last-name' value={user.last_name} onChange={(e) => { setUser({ ...user, last_name: e.target.value }) }} /><br />
        <br /> 
        <label htmlFor="zip-code">zip code:</label><br />
        <input type="text" name="zip-code" value={user.zip_code} onChange={(e) => setUser({ ...user, zip_code: e.target.value })} /><br />
        <br /> <br />
        <button type="submit">register</button>
        <br /> <br /> 


      </form>
    </Container>
  )

}

