import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password)
    {
        res.status(400).json({ error: "E-mail e senha são obrigatórios" });
        return;
    }

    next();
};

export const JWTMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const token = req.header("authorization");

    if (token === undefined)
    {
        res.status(401).json({ error: "Token não informado" });
        return;
    }

    if (jwt.decode(token) == null)
    {
        res.status(401).json({ error: "Token inválido" });
        return;
    }

    next();
};