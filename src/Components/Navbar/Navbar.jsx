import { Link, Outlet, useLocation } from "react-router-dom";
import "./Navbar.css"
import { useNavigate } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function Nabar(params) {
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState({});
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("user") !== null) {
            setUser(location.state);
            if (JSON.parse(localStorage.getItem("user")).type === "admin") {
                setIsAdmin(true);
            }
        }
        else {
            alert("please Login");
            navigate('/', { replace: true });
            return;
        }
    })

    console.log(user);

    function Logout() {
        localStorage.clear();
        navigate('/', { replace: true });
    }

    function showData() {
        return (<>
            <nav className="navBar">
                <section>
                    <div className="logo">
                        <Link to="/home">Logo</Link>
                    </div>
                    <div className="mnue">
                        <Link className={isAdmin ? "" : "d-none"} to="/dashboard">Dashbord</Link>
                        <FontAwesomeIcon icon={faRightFromBracket} onClick={Logout} />
                    </div>
                </section>
            </nav>
            <Outlet></Outlet>
        </>);
    }

    return (<>
        {showData()}
    </>)
}
export { Nabar }