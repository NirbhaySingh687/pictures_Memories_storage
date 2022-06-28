import React from "react"
import Navbar from "./Component/Navbar";
import { ToastContainer } from "react-toastify"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Component/Home";
import AddContact from "./Component/AddContact";
import EditContact from "./Component/EditContact";

function ReduxTest(){
    return(
        <div>
            <ToastContainer />
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />}/>
                    <Route path="/add" exact element={<AddContact />}/>
                    <Route path="/edit/:id" exact element={<EditContact />}/>
                </Routes>
            </Router>
        </div>
    )
}

export default ReduxTest
