import axios from "axios";

const url = 'http://localhost:5000/post'

export const fetchPost = () => axios.get(url)
export const createPost = (newPost) => axios.post(url, newPost)
export const updatePost = (id, data)=> axios.patch(`${url}/${id}`, data)

