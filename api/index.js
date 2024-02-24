import express, { application } from "express"
import questionRoutes from "./routes/questions.js"
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";
import cookieParser from "cookie-parser";

const app = express()

app.use(express.json());
app.use(cookieParser());

app.use("/api/test", questionRoutes)
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

app.listen(8800, ()=>{
    console.log("Connected!")
})