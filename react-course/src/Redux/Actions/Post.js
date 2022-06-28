import * as api from "../../Api"

export const getPost = () => async (dispatch)=>{
    try {
        const { data } = await api.fetchPost();
        dispatch({
            type: "FETCH_ALL",
            payload: data
        })
    } catch (err) {
        console.log(`##`,err)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        dispatch({ type: "CREATE", payload: data })
    }catch (err) {
        console.log(`##`,err)
    }
}