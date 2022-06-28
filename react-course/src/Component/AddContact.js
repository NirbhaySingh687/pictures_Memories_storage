import React, { useState} from "react";
import { useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom"

function AddContact(){
    const contact = useSelector((state) => state)
    const history = useNavigate()
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!email || !phone || !name){
            return alert("Please Fill in all Fields")
        }
        const checkEmail = contact.find((c) => c.email === email)
        if(checkEmail){
            return alert("This Email is already Exists")
        }
        let lastLength = contact.length+1
        const data = {
            id: lastLength,
            name, email, phone
        }
        dispatch({
            type: "ADD_CONTACT",
            payload: data
        })
        history('/')
        return alert("SuccessFully Added")
    }
    return (
        <div className="container-fluid">
            <h1 className="text-center text-dark py-3 display-2">Add Post</h1>
            <div className="row">
                <div className="col-md-6 p-5 mx-auto shadow">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="number"
                                placeholder="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="btn btn-block btn-dark"
                                type="submit"
                                value="Add Student"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddContact