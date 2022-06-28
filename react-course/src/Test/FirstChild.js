import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getPost } from "../Redux/Actions/Post";
import "./style.css"

function FirstChild(){
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPost)
    }, [])
    return(
        <div className="firstChild">
            FirstChild
        </div>
    )
}

export default FirstChild