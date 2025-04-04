import { Request, Response } from "express";
import User from "../models/user.ts";
import jwt from "jsonwebtoken";
import CryptoTS from "crypto-ts";
import dotenv from "dotenv";

dotenv.config();

class AuthController {
    static async register(req: Request, res: Response) : Promise<any> {
        const { name, email, password } = req.body;

        const passwordCrypt = CryptoTS.AES.encrypt(password, process.env.SECRET as string).toString();

        const user = new User({
            name,
            email,
            // password
            password: passwordCrypt,
        });
        
        try {
            await user.save();
            res.status(201).send({ message: "Usuário cadastrado com sucesso" });
        } catch (error) {
            res.status(500).send({ message: "Something failed" });
        }
    }

    static async login(req: Request, res: Response) : Promise<any> {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        if(!user)
            return res.status(400).send({ message: "Invalid Email" });

        const decryptedIn = CryptoTS.AES.decrypt(user.password, process.env.SECRET as string).toString(CryptoTS.enc.Utf8);

        if(!(password == decryptedIn)){
            return res.status(400).send({ message: "Invalid Email or password" });
        }

        // if(!(password == user.password))
        //     return res.status(400).send({ message: "Invalid Email or password" });

        const secret = process.env.SECRET;
        const token = jwt.sign(
            {
                id: user._id,
            },
            secret as string,
            {
                expiresIn: "2 days"
            }
        );
        return res.status(200).send({ token: token });
    }
}

export default AuthController;