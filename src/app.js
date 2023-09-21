import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao = await conectaNaDataBase();
// ormalmente, em JavaScript, os métodos que têm o nome on estão relacionados a algum evento
conexao.on("error", (erro) => {
    console.error("erro de conexao", erro);
});

conexao.once("open", () => {
    console.log("Conexao feita com sucesso");
});

const app = express();
app.use(express.json());

// CRUD - Criar, Ler, atualizar, deletar

// função que busca o livro em meio a lista por ID
app.get("/", (req, res) => {
    res.status(200).send("curso de Node.js");
});
// LER os daddos do banco
app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
});
// LER os daddos do banco
app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id)
    res.status(200).json(livros[index]);
});

// CREATE, criar novos dados no banco 
app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso");
});
// ATUALIZAR os dados do banco
app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});
// deletar 
app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("livro removido com sucesso");
});

export default app;

