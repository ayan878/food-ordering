import Express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import myUserRoute from "./routes/MyUserRoutes"; 

dotenv.config();

const app = Express();
app.use(Express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => {
    app.listen(3000, () => {
      console.log(`Server started on http://localhost:3000`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

// Mount the user route
app.use("/api/my/user", myUserRoute);
