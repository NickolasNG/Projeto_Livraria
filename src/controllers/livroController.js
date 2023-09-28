import Livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {

  static async listarLivros(req, res, next) {
    try {
      const listaLivros = await Livro.find({});
      res.status(200).json(listaLivros);
    } catch (erro) {
      next(erro);
    }
  }

  static async listarLivroPorId(req, res, next) {
    try {
      const id = req.params.id;
      const livroEncontrado = await Livro.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (erro) {
      next(erro);
    }
  }

  static async cadastrarLivro (req, res, next) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc }};
      const livroCriado = await Livro.create(livroCompleto);
      res.status(201).json({ message: "criado com sucesso", livro: livroCriado });
    } catch (erro) {
      next(erro);
    }
  }
    
  static async atualizarLivro(req, res, next) {
    try {
      const id = req.params.id;
      await Livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "livro atualizado" });
    } catch (erro) {
      next(erro);
    }
  }

  static async deletarLivro(req, res, next) {
    try {
      const id = req.params.id;
      await Livro.findByIdAndDelete(id);
      res.status(200).json({ message: "livro deletado com sucesso" });
    } catch (erro) {
      next(erro);
    }
  }

  static async listarLivrosPorTitulo(req, res, next) {
    const titulo = req.query.titulo;
    try{
      const livroPortitulo = await Livro.find({titulo: titulo});
      res.status(200).json(livroPortitulo);
    } catch (erro){
      next(erro);
    }
  }

}

export default LivroController;