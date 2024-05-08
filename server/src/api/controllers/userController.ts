import User from "../models/userModel";
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';

export const signUp =  async (req: Request, res:Response): Promise<void> => {
    const { email, password, fullName, dateOfBirth } = req.body;
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = new User({
            email,
            password: hashedPassword,
            fullName,
            dateOfBirth
        });
        await user.save();
        res.status(201).json({ message: "User added successfully!", userId: user._id })
    } catch (error) {
        res.status(500).json({ message: "Error registering new user."})
    } 
};

export const logIn = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user && await bcrypt.compare(password, user.password)) {
            res.json({ message: "User logged in successfully!", userId: user._id });
        } else {
            res.status(401).json({ message: "Authentication Failed!" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error Logging in!"});
    }
};