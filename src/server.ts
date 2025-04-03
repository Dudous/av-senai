import express from 'express';
import initRoutes from "./routes/routes.ts"
import connectDB from './database/database.ts';
import cors from 'cors'

const app = express();
const port = 8080;

connectDB();
initRoutes(app);

app.use(cors({
    origin: "http://localhost:3000", // Permite apenas requisições desta origem
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos HTTP permitidos
    allowedHeaders: ["Content-Type", "Authorization"], // Cabeçalhos permitidos
}))

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`)); 