import express from "express"
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors"

import PostRoutes from "./routes/Post"

const app = express()
const PORT = 5000

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use("/post", PostRoutes)

const CONNECTION_URL = "mongodb://127.0.0.1:27017/memory"

mongoose.connect(CONNECTION_URL).then(() => {
    console.log("Db Connected")
    app.listen(PORT, () => {
        console.log(`Server is Up and Running on PORT ${PORT}`)
    })
}).catch(err => {
    console.log("Db Error",err)
})

