import User from "../models/userModel";
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';


export const signUp =  async (req: Request, res:Response): Promise<void> => {
    const { username, email, password, fullName, dateOfBirth } = req.body;
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = new User({
            username,
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
            // Here we generate the token
            const token = jwt.sign(
                { userId: user._id, email: user.email }, // Payload data
                'your_secret_key', // Secret key for signing the token
                { expiresIn: '1h' } // Options, setting the expiry to one hour
            );

            res.json({ message: "User logged in successfully!", token: token });
        } else {
            res.status(401).json({ message: "Authentication Failed!" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error Logging in!"});
    }
};
