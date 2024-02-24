import express, { application } from "express"
import questionRoutes from "./routes/questions.js"
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express()

const corsOptions = {
  origin: ["https://quattro.onrender.com", "http://localhost:3000"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use("/api/test", questionRoutes)
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

app.listen(8800, ()=>{
    console.log("Connected!")
})
