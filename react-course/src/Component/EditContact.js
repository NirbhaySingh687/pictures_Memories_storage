import React, {useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";


const EditContact = ()=>{
    const { id } = useParams()
    const contact = useSelector((state) => state)
    const findContact = contact.find((c) => c.id.toString() === id.toString() )
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(()=>{
        if(findContact){
            setName(findContact.name)
            setEmail(findContact.email)
            setPhone(findContact.phone)
        }
    },[])
    return (
        <div className="container-fluid">
            {
                findContact ?
                    <>
                        <h1 className="text-center text-dark py-3 display-2">Edit Post</h1>
                        <div className="row">
                            <div className="col-md-6 p-5 mx-auto shadow">
                                <form >
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
                                            className="btn btn-dark"
                                            type="submit"
                                            value="Update Student"
                                        />
                                        <Link className="btn  btn-danger m-3" to="/">
                                            Cancel
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </>
                    :
                    (
                        <h1 className="display-3 my-5 text-center">{`Student contact No Found ${id}`}</h1>
                    )
            }
        </div>
    );
}

export default EditContact