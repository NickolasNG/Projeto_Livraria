import NaoEncontrado from "../erros/NaoEncontrado.js";
import {autor} from "../models/Autor.js";

class autorController {

  static async listarAutor(req, res, next) {
    try {
      const listaAutor = await autor.find({});
      res.status(200).json(listaAutor);
    } catch (erro) {
      next(erro);
    }
  }

  static async listarAutorID(req, res, next) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);

      if(autorEncontrado !== null){
        res.status(200).send(autorEncontrado);
      } else {
        next(new NaoEncontrado("Id do autor nao localizado"));
      }    
    } catch (erro) {
      next(erro);
    }
  }

  static cadastrarAutor = async (req, res, next) => {
    try {
      let novoAutor = new autor(req.body);
      const autorResultado = await novoAutor.save();
      res.status(201).send(autorResultado.toJSON());
    } catch (erro){
      next(erro);
    }
  };

  static async atualizarAutor(req, res, next) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Autor atualizado" });
    } catch (erro) {
      next(erro);
    }
  }

  static async deletarAutor(req, res, next) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "Autor deletado com sucesso" });
    } catch (erro) {
      next(erro);
    }
  }
}

export default autorController;