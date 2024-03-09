import express from "express";
import connect from "./config/dbConnect.js";
import routes from "./routes/index.js";
import cors from "cors"

const con = await connect();

con.on("error", (err) => console.error("erro de conexão: ", err));

con.once("open", () => console.log("conexão com banco"));

const app = express();
app.use(cors())
routes(app)

export default app;
