import { Request, Response } from "express";
import User from "../model/user";

const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      // User already exists, send a success response with status 200
      return res.status(200).json(existingUser.toObject());
    }

    // Create a new user if not found
    const newUser = new User(req.body);
    await newUser.save();

    // Send a success response with status 201 and the new user object
    res.status(201).json(newUser.toObject());
  } catch (error) {
    // Log the error to console for debugging purposes
    console.error(error);

    // Send an error response with status 500 and an error message
    res.status(500).json({ message: "Error creating the user" });
  }
};

export default {
  createCurrentUser,
};
