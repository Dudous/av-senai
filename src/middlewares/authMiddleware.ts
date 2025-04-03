import { Request, Response, NextFunction } from "express";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password)
        res.status(400).json({ error: "E-mail e senha são obrigatórios" });

    next();
};

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    


    next()
}

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {


    next()
}