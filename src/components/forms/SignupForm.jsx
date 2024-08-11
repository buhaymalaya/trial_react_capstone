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
        <br /> <br /> [Caution: Use a safe email address or create a new one if needed]</h5>         <br /> 

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

        <div className="about-decoy">
          <h6>
          
By signing up for an account and clicking the "register" button below, you agree to both the Privacy Policy and Release of Liability as stipulated. <br /> <br />

<div className="about-decoy"> Privacy Policy <br /> <br />

The [esc] Team ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect the information you provide when using our services, 
particularly in the context of domestic violence support and connecting you to respective DV shelters. <br />

Information Collection and Use <br /> <br />

Purpose: We collect personal information solely for the purpose of providing support and assistance in situations of domestic violence. <br /> <br />
Information Sharing: We do not sell, trade, or otherwise transfer your personal information to third parties. Your information will only be shared with domestic violence shelters or other 
relevant support organizations as necessary to provide you with the services you request. <br /> <br />
Security: We implement a variety of security measures to maintain the safety of your personal information. However, please be aware that no method of transmission over the Internet, or 
method of electronic storage, is 100% secure. <br /> <br />
User Consent: By using our services, you consent to the collection and use of your information as outlined in this Privacy Policy. <br /> <br />
Changes to This Policy: We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. <br /> <br />
If you have any questions regarding this Privacy Policy, please contact us at esc.advocate@gmail.com.
<br /> <br /> <br />

</div> <br />

<div className="about-decoy">
Release of Liability <br /> <br />

By accessing and using the services provided by the [esc] Team ("we," "our," or "us"), you acknowledge and agree to the following terms and conditions: <br /> <br />

Technological Abuse <br /> <br />

Awareness: Domestic violence abusers may use various forms of technological abuse, including but not limited to tracking your online activity, monitoring communications, 
and accessing personal information through digital means. It is important to take precautions, such as using secure devices, using public access such as the library, 
maintaining strong passwords, and clearing browsing history when necessary. <br /> <br />
Limitation of Liability: You acknowledge that [Organization Name] provides tools and services to assist in situations of domestic violence, 
but we cannot control or prevent all forms of technological abuse that may occur. By using our services, you agree to release the [esc] Team and its team members, employees, 
and affiliates from any and all liability related to any misuse or abuse of your personal information by third parties, including abusers. <br /> <br />
User Responsibility: It is your responsibility to use our services in a safe and secure manner. We recommend taking additional steps to protect your privacy 
and safety when using our services, such as accessing our site from a secure location and using private browsing modes. <br /> <br />
Agreement <br /> <br />

By using our services, you agree to this Release of Liability. If you do not agree with these terms, please refrain from using our site and services. <br /> <br />

For any concerns or questions, please contact us at esc.advocate@gmail.com. <br />

</div>

          </h6>
          </div>
        <button type="submit">register</button>
        <br /> <br /> 


      </form>
    </Container>
  )

}

