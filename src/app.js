/* eslint-disable no-unused-vars */
import express from "express";
import conectaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";

const conexao = await conectaDataBase();
// ormalmente, em JavaScript, os métodos que têm o nome on estão relacionados a algum evento
conexao.on("error", (erro) => {
  console.error("erro de conexao", erro);
});

conexao.once("open", () => {
  console.log("Conexao com o banco de dados feita com sucesso");
});

const app = express();
app.use(express.json());
routes(app);

app.use(manipuladorDeErros);

export default app;

