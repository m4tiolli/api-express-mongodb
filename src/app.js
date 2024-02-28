import express from "express";
import connect from "./config/dbConnect.js";
import routes from "./routes/index.js";

const con = await connect();

con.on("error", (err) => console.error("erro de conexao: ", err));

con.once("open", () => console.log("conexão com banco"));

const app = express();
routes(app)

export default app;
