import PostMessage from "../Models/PostMessage"

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
