import express from "express";
import { getPost, createPost } from "../Controllers/Post"
const router = express.Router()

router.get("/", getPost )
router.post("/", createPost )

module.exports = router