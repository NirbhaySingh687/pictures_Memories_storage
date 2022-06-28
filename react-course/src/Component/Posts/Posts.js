import React from "react";
import Post from "./Post/Post"
import { useStyles } from "./styles"

function Posts(){
    const classes = useStyles()
    return(
        <div>
            <h1 className={ classes.heading }>Posts</h1>
            <Post />
        </div>
    )
}

export default Posts