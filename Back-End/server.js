const express = require("express");
const dotnev = require("dotenv");
const mongoose = require("mongoose");
const UserRoute = require("./routes/UserRouter")

dotnev.config({ path: './conf.env' })

const app = express()

app.use(express.json())

mongoose.connect(process.env.CONSTR, {
    UseNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("connected")
    })

app.use('/user', UserRoute)

app.listen(8080, () => {
    console.log("connect port 8080")
})