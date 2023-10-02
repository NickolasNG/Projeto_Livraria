import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
//O método trim() remove espaços em branco no início e no final de uma string
  validator: (valor) => valor.trim() !== "",
  message: ({ path }) => `O campo ${path} foi fornecido em branco`
});