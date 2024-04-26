import { useContext, useEffect } from "react"
import { UserContext } from "../contexts/UserContext"
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

export default function Logout() {

    const userData = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(()=>{
        userData.setUser({});
        alert("You are now logged out")
        navigate('/logout');
        
    }, [])


  return <Spinner />
}
