import express, { Request, Response } from "express"; 
import cors from "cors"; 
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoutes"

mongoose.connect(process.env.MONGODB_CONNECT_STRING as string).then(()=>console.log("Connected to database")).catch((e)=>e.message);

const app = express(); 
app.use(express.json());
app.use(cors()); 

app.use("/api/my/user",myUserRoute)

const port = 7000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

