import { useNavigate } from "react-router-dom";
import "./Home.css"
import { Spiner } from '../Spiner/Spiner';
import { useEffect, useState } from "react";

function Home() {
    const navigate = useNavigate();
    const [loader,setLoader] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setLoader(true);
        },3000)
    },[]);

    function shosePage(){
        navigate("/shosePage",{replace:true});
    }
    return (<>
    <Spiner none={loader}></Spiner>
        <div className={`homePage ${loader?"":"d-none"}`}>
            <button className="goShoping" onClick={shosePage}>Go Shoping</button>
        </div>
    </>);
}
export { Home }