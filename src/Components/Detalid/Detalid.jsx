import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Spiner } from '../Spiner/Spiner';
import "./Detalid.css"
function Detalid() {
    const navigater = useNavigate();
    const location = useLocation();
    console.log(location.state);
    const [product, setProduct] = useState(location.state);
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoader(true);
        }, 3000)
    }, []);
    return (<>
        <Spiner none={loader}></Spiner>
        <div className={`detailedContainer ${loader?"":"d-none"}`}>
            <div className="information">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <span>${product.price}</span>
            </div>
            <div className="productImg">
                <img src={product.image} alt="" />
            </div>
        </div>
    </>);
}

export { Detalid }