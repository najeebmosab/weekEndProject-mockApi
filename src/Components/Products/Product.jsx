import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Spiner } from '../Spiner/Spiner';
import { DataChatGPT } from '../Data/Data';
import "./Product.css";
function Product() {
    const [productData, setProductData] = useState([]);
    console.log(productData);
    const navigater = useNavigate();
    useMemo(async () => {
        const res = await fetch("https://63f620f39daf59d1ad8276a4.mockapi.io/Food");
        const data = await res.json();
        console.log("data",data);
        setProductData([...data]);
    }, []);

    const [loader, setLoader] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoader(true);
        }, 3000)
    }, []);


    function goDetailed(id) {
        navigater(`/Detalid/${id}`, { state: productData.find((product) => { return product.id === id }) });
    }

    function showProducts() {
        return (<>
            {
                productData.map((el) => {
                    return (<>
                        <div className="card" key={el.id} onClick={() => {
                            goDetailed(el.id);
                        }}>
                            <img src={el.image} alt="" />

                            <div className="DetalidProduct">
                                <h2>{el.name}</h2>
                                <span>${el.price}</span>
                            </div>
                        </div>
                    </>)
                })
            }
        </>)

    }
    
    return (<>
        <Spiner none={loader}></Spiner>
        <div className={`productsContainer ${loader ? "" : "d-none"}`}>
            {showProducts()}
        </div>
    </>);
}
export { Product }