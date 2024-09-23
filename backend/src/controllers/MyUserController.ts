import { Request, Response } from "express";
import userModel from "../models/user"; 

const createCurrentUser = async (req: Request, res: Response) => {
  const { auth0Id, email } = req.body;

  // Check if the user already exists
  try {
    const existingUser = await userModel.findOne({ auth0Id });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Create a new user
    const user = new userModel({
      auth0Id,
      email,
    });

    await user.save(); 
    res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Error creating user" }); 
  }
};

export default { createCurrentUser };
