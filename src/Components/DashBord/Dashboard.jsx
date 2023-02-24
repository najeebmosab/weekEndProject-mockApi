import { useEffect, useMemo, useState } from "react";
import {  Outlet, useNavigate } from "react-router-dom";
import "./Dashboard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
import { Spiner } from '../Spiner/Spiner';

function Dashboard() {

    const [productData, setProductData] = useState([]);
    const navigater = useNavigate();

    useMemo(async () => {
        const res = await fetch("https://63f620f39daf59d1ad8276a4.mockapi.io/Food");
        const data = await res.json();
        setProductData([...data]);
    }, []);

    async function deleteProduct(id) {

        const data = productData.filter((el) => { return el.id !== id });
        console.log("data for product", data);
        const res = await fetch(`https://63f620f39daf59d1ad8276a4.mockapi.io/Food/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => {
            if (response.ok) {
                alert("Delete Done");
                setProductData([...data]);
            } else {
                // The item was not deleted, handle the error
                alert("Some thing error");
            }
        })
            .catch(error => {
                alert("Some thing error");

            });


    }

    function goDetailed(id) {
        navigater(`/Detalid/${id}`, { state: productData.find((product) => { return product.id === id }) });
    }

    function updateProduct(id){
        navigater(`/update/${id}`, { state: productData.find((product) => { return product.id === id }) });

    }

    function showData() {

        return (<>
            {productData.map((el) => {
                return (<>
                    <div className="card" key={el.id} >
                        <img src={el.image} alt="" />
                        <div className="DetalidProduct">
                            <h2>{el.name}</h2>

                        </div>
                        <div className="eventing">
                            <button onClick={()=>{
                                updateProduct(el.id)
                            }}><FontAwesomeIcon icon={faCog}  /></button>

                            <button onClick={() => {
                                goDetailed(el.id)
                            }}><FontAwesomeIcon icon={faEye} /></button>

                            <button><FontAwesomeIcon onClick={() => {
                                deleteProduct(el.id)
                            }} icon={faTrash} /></button>

                        </div>
                    </div>
                </>)
            })}
        </>)

    }
    const [loader, setLoader] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            setLoader(true);
        }, 3000)
    }, []);

    return (
        <>
            <Spiner none={loader}></Spiner>
            <div className={`mockDataContainer ${loader ? "" : "d-none"}`}>
                <div className="addProduct">
                    <button>Add Product</button>
                </div>
                <div className="mockData">
                    {showData()}
                </div>
            </div>

        </>
    )
}
export { Dashboard };