// importar a nossa model para usar as funções do mongo no service
const Lista = require("./../models/Listas");

const getListas = async () => {
  // vai conectar com o banco de dados e retornar a lista de Listas
  // find = busca dados no banco de dados  de acordo com o filtro, se nao houver filtro, busca todos os dados cadastros
  const listas = await Lista.find();
  return listas;
};

// recebe um id e faz uma busca no banco de dados de acordo com esse id
const getListaById = async (id) => {
  const lista = await Lista.findById(id)
  return lista;
}

// recebe um objeto (JSON) e salva no banco de dados
const createLista = async (lista) => {
  // recebe o objeto e envia para ser cadastro no banco atraves do model da funcao create.
  return await Lista.create(lista)
}

// recebe um Objeto(JSON) e um id e altera os valores de um Lista no banco de dados
const editLista = async (id, lista) => {
  return await Lista.findByIdAndUpdate(id, lista);
}

// recebe um id e exclui uma lista do banco de dados de acordo com esse id
const deleteLista = async (id) => {
  return await Lista.findByIdAndDelete(id);
}


module.exports = {
  getListas,
  getListaById,
  createLista,
  editLista,
  deleteLista
};
