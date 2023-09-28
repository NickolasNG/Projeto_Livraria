import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId},
  nome: {type: String, required: [true, "O nome do(a) é obrigatorio"]},
  nacionalidade: { type: String }
}, { versionKey: false});

const autor = mongoose.model("autor", autorSchema);

export { autor, autorSchema };