import PostMessage from "../Models/PostMessage"
import mongoose from "mongoose";

export const getPost = async (req, res) => {
    try {
        const postMessage = await PostMessage.find({});
        res.status(200).json(postMessage)
    } catch (err) {
        res.status(404).json({ message: "error Found"})
    }
}

export const createPost = async (req, res) => {
    try {
        const param = { ...req.body }
        const newPost = PostMessage(param)
        await newPost.save()
        res.status(201).json(newPost)
    } catch (err) {
        res.status(404).json({ message: "error Found"})
    }
}

export const updatePost = async (req, res) => {
    try {
        const { id: _id } = req.params;
        const data = req.body
        console.log(`@@@@@@`,data)
        if(!mongoose.Types.ObjectId.isValid(_id)){
            return res.status(404).send("No Post With That Id")
        }
        const updatePost = await PostMessage.findByIdAndUpdate(_id, data, { new: true})
        res.json(updatePost)
    } catch (err) {
        res.status(404).json({ message: "error Found"})
    }
}
