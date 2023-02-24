import { useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import "./Edit.css"
function Edit(params) {
    const location = useLocation();
    console.log(location);
    const inputName = useRef("");
    const inputDescription = useRef('');
    const inputPrice = useRef("");
    const inputImg = useRef("");
    const navigate = useNavigate();
    let [updatedData, setUpdateData] = useState({ id: location.state.id, name: location.state.name, description: location.state.description, price: location.state.price, image: location.state.image });
    function updateDatas() {
        const newData = {
            ...updatedData,
            name: inputName.current.value,
            description: inputDescription.current.value,
            price: inputPrice.current.value,
            image: inputImg.current.value
        }
    
        setUpdateData(newData);
        return newData;
    }
    async function updateProduct(event) {
        event.preventDefault();
        const resData =  updateDatas();
        console.log(resData);
        const res = await fetch(`https://63f620f39daf59d1ad8276a4.mockapi.io/Food/${location.state.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(resData)
        });
        console.log(res.json());
        if(res.ok)
        {
            navigate("/dashboard");
        }
    
    }

    return (<>
        <div className="updateFormContiner">
            <h2>Update Product</h2>
            <form action="" onSubmit={updateProduct}>
                <div>
                    <label htmlFor="">Product Name</label>
                    <input type="text" defaultValue={location.state.name} ref={inputName} />
                </div>
                <div>
                    <label htmlFor="">Product Description</label>
                    <input type="text" defaultValue={location.state.description} ref={inputDescription} />
                </div>
                <div>
                    <label htmlFor="">Product Price</label>
                    <input type="text" defaultValue={location.state.price} ref={inputPrice} />
                </div>
                <div>
                    <label htmlFor="">Product Img</label>
                    <input type="text" defaultValue={location.state.image} ref={inputImg} />
                </div>
                <div>
                    <button type="submit">Update</button>
                </div>
            </form>
        </div>


    </>)
}

export { Edit }