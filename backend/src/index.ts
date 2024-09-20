import Express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = Express();
app.use(Express.json());
app.use(cors());

mongoose.connect(``).then(() => {
  app.listen(3000, () => {
    console.log(`server start on http://localhost:3000`);
  });
});
