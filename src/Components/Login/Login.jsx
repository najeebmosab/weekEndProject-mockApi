import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { data } from "../Data/UsersData";
function Login() {
    const email = useRef("");
    const password = useRef("");
    const [user, setUser] = useState(data);
    // const navigate = useNavigate()
    const navigate = useNavigate();
    function onLogin(event) {
        event.preventDefault();
        
        if (isUser()) {
            localStorage.setItem("user", JSON.stringify(isUser()));
            navigate("/home",{state:isUser()})
            // navigate('/home', { replace: true });
        }
        else{
            alert("Please Login");
        }
    }
    function isUser() {

        return user.find((user) => { return user.email === email.current.value && user.password === password.current.value });
    }
    return (<>
        <form className="containerForm" onSubmit={onLogin}>
            <div><h2 className="title">Login Page</h2></div>
            <div>

                <input type="email" ref={email} placeholder="Email" name="" id="" />
            </div>
            <div>

                <input type="password" ref={password} placeholder="Passowrd" name="" id="" />
            </div>
            <div >
                <button className="BTNSubmit" type="submit">Login</button>
            </div>
        </form>
    </>)
}

export default  Login 