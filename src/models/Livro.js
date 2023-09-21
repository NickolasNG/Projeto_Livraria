import mongoose, { Schema } from "mongoose";



// Schema (é um objeto de configuração que define a estrutura e as propriedades de um documento)
const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, require: true},
    autor: {type: String, require: true},
    editora: {type: String},
    preco: {type: Number},
    paginas: {type: Number}
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema);

export default livro;