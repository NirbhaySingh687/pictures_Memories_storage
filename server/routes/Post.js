import express from "express";
import { getPost, createPost, updatePost } from "../Controllers/Post"
const router = express.Router()

router.get("/", getPost )
router.post("/", createPost )
router.patch("/:id", updatePost)

module.exports = router