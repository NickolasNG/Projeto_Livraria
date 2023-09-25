import express from "express";
import conectaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaDataBase();
// ormalmente, em JavaScript, os métodos que têm o nome on estão relacionados a algum evento
conexao.on("error", (erro) => {
    console.error("erro de conexao", erro);
});

conexao.once("open", () => {
    console.log("Conexao feita com sucesso");
});

const app = express();
routes(app);

export default app;

