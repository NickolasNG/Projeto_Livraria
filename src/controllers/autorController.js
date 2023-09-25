import { autor } from "../models/Autor.js";

class autorController {

    static async listarAutor(req, res) {
        try {
            const listaAutor = await autor.find({});
            res.status(200).json(listaAutor);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    };

    static async listarAutorID(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao encontrar o autor` });
        }
    }

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "Autor cadastrado com sucesso", autor: novoAutor });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - FALHA AO CADASTRAR AUTOR` });
        }
    };

    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Autor atualizado" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização do autor` });
        }
    };

    static async deletarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: "Autor deletado com sucesso" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na exclusão` });
        }
    };
};

export default autorController;