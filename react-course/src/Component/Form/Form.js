import React, {useEffect, useState} from "react"
import useStyles from "./styles"
import FileBase from "react-file-base64";
import {Paper, Typography, TextField,Button } from "@mui/material";
import { useDispatch } from "react-redux";
import {createPost, updatePost} from "../../Redux/Actions/Post";
import { useSelector } from "react-redux";

function Form({ currentId, setCurrentId }){
    const [ postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: ""
    })
    const posts = useSelector(state => currentId ? state.posts.find(p => p._id === currentId) : null)
    useEffect(()=> {
        if(posts){
            setPostData(posts)
        }
        console.log(`@@@@@@@@@@@@@@@@@@@`)
    },[posts])
    const classes = useStyles()
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`@@@@@@@`,currentId)
        if(currentId){
            dispatch(updatePost(currentId, postData))
        }else{
            dispatch(createPost(postData))
        }

    }

    const clear = () => {

    }
    return(
        <Paper className={ classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography varient="h6">Creating a Memory</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={ (e) => setPostData({ ...postData, creator: e.target.value})} />
                <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={ (e) => setPostData({ ...postData, title: e.target.value})} />
                <TextField name="message" variant="outlined" label="message" fullWidth value={postData.message} onChange={ (e) => setPostData({ ...postData, message: e.target.value})} />
                <TextField name="tags" variant="outlined" label="tags" fullWidth value={postData.tags} onChange={ (e) => setPostData({ ...postData, tags: e.target.value})} />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        mutiple={false}
                        onDone={({ base64}) => setPostData({ ...postData, selectedFile: base64})}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" type="submit" color="primary" size="large" fullWidth>Submit</Button>
                <Button variant="contained" type="submit" color="secondary" size="small" fullWidth onClick={clear}>Submit</Button>
            </form>
        </Paper>
    )
}

export default Form