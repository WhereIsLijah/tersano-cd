import User from "../models/userModel";
import { Request, Response } from 'express';

export const signUp =  async (req: Request, res:Response): Promise<void> => {
    const {username, email, password, fullName, dateOfBirth } = req.body;
    try {
        const user = new User({
            username,
            email,
            password,
            fullName,
            dateOfBirth
        });
        await user.save();
        res.status(201).json({ message: "User added successfully!", userId: user._id })
    } catch (error) {
        res.status(500).json({ message: "Error registering new user."})
    } 
};

export const logIn = async (req: Request, res:Response): Promise<void> => {
    const {login, password } = req.body;
    try {
        const user = await User.findOne({ 
            $or: [
                { username: login },
                { email : login }
            ],
             password 
            });

        if (user) {
            res.json({ message: "User logged in successfully!", userId: user._id })
        } else {
            res.status(401).json({ message: "Authentication Failed!."}) 
        }
    } catch (error) {
        res.status(500).json({ message: "Error Logging in!."})
    } 
};