import Express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import myUserRoute from "./routes/MyUserRoutes"

dotenv.config();

const app = Express();
app.use(Express.json());
app.use(cors());

const mongoConnectionString = process.env.MONGODB_CONNECTION_STRING;

if (!mongoConnectionString) {
  console.error(
    "MONGODB_CONNECTION_STRING is not defined in the environment variables."
  );
  process.exit(1);
}

mongoose
  .connect(mongoConnectionString)
  .then(() => {
    app.listen(3000, () => {
      console.log(`Server started on http://localhost:3000`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

// route
app.use("/api/my/user", myUserRoute);
