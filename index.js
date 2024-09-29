import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import router from "./routes/route.js";

const app = express();
const port = process.env.PORT;

mongoose.connect(process.env.MONGODB).then(() => console.log("Connection Successfull"))

app.use(express.json())
app.use(express.urlencoded({extended: true }))
app.use("/", router);


app.listen(port, () => console.log("server started at port" + port))