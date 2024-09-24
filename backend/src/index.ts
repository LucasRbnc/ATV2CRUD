import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connect } from "./db/connection";

dotenv.config();

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.json);

app.use(cors());

connect();

if(require.main === module){
    app.listen(PORT,() =>{
        console.log(`Rodando na porta ${PORT}...`);
    })
}

export default app;