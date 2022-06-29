import {useEffect, useState} from "react";
import Posts from "./Component/Posts/Posts";
import {Container, AppBar, Typography, Grow, Grid, styled} from "@mui/material";
import memories from "./images/memories.png"
import Form from "./Component/Form/Form";
import { useDispatch } from "react-redux";
import {getPost} from "./Redux/Actions/Post";



const CustomAppBar = styled(AppBar)(() => ({
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
}))

const CustomHeading = styled(Typography)(()=> ({
    color: "rgba(0,183,255,1)"
}))



function App(){
    const dispatch = useDispatch()
    const [ currentId, setCurrentId] = useState(null)
    useEffect(() => {
        dispatch(getPost())
    },[])
    return(
        <Container maxWidth="lg">
            <CustomAppBar position="static" color="inherit">
                <CustomHeading variant="h5" align="center">Memories</CustomHeading>
                <img src={memories} alt="memories" height="30" style={{ marginLeft: '15px',}}/>
            </CustomAppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={1}>
                        <Grid item xs={12} sm={7 }>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App
