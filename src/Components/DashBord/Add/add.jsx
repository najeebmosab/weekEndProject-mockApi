import "./Add.css";
import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";;
function Add() {
    const inputName = useRef("");
    const inputDescription = useRef('');
    const inputPrice = useRef("");
    const inputImg = useRef("");
    const navigate = useNavigate();

   async function AddProduct(event) {
        event.preventDefault();
        const product = {
            name:inputName.current.value,
            price:inputPrice.current.value,
            image:inputImg.current.value,
            description:inputDescription.current.value
        }
        const res = await fetch(`https://63f620f39daf59d1ad8276a4.mockapi.io/Food`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        });
        if (res.ok) {
            const data = res.json();
            console.log(data);
            navigate("/dashboard");
        }
    }


    return (<>
        <div>
            <div className="addProductFormController">
            <h2>Add Product</h2>
                <form action="" onSubmit={AddProduct}>
                    <div>
                        <label htmlFor="">Name</label>
                        <input type="text" ref={inputName} name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Description</label>
                        <input type="text" ref={inputDescription} name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Price</label>
                        <input type="text" ref={inputPrice} name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Image</label>
                        <input type="text" ref={inputImg} name="" id="" />
                    </div>
                    <div>
                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>
        </div>
    </>)
}
export { Add }