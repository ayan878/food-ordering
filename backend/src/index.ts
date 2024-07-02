import express, { Request, Response } from "express"; // Importing express and types for Request and Response
import cors from "cors"; // Importing cors middleware
import "dotenv/config"; // Loading environment variables from a .env file

const app = express(); // Creating an instance of express

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors()); // Middleware to enable CORS (Cross-Origin Resource Sharing)

// Route to handle GET requests to "/test"
app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello" }); // Responding with a JSON object
});

const port = 7000; // Defining the port number

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); // Logging server start message
});
