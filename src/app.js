import express from "express";

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "O senhor dos Anéis"
    },
    {
        id: 2,
        titulo:"O Hobbit"
    }
]

// CRUD - Criar, Ler, atualizar, deletar

// função que busca o livro em meio a lista por ID
function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    })
}

app.get("/", (req, res) => {
    res.status(200).send("curso de Node.js");
});
// LER os daddos do banco
app.get("/livros", (req, res) => {
    res.status(200).json(livros);
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