const pool = require('../database');  // Importa a conexão com o banco de dados

// Criar Cliente
exports.createCliente = async (data) => {
    const { nome, email, idade } = data;
    // Query para inserir um novo cliente na tabela 'clientes'
    const query = "INSERT INTO clientes (nome, email, idade) VALUES (?, ?, ?)";
    // Usando o método 'execute' para executar a query com os parâmetros fornecidos
    const [result] = await pool.execute(query, [nome, email, idade]);
    return result;  // Retorna o resultado da operação (o cliente criado)
};

// Atualizar Cliente
exports.updateCliente = async (id, data) => {
    const { nome, email, idade } = data;
    // Query para atualizar as informações de um cliente existente
    const query = "UPDATE clientes SET nome = ?, email = ?, idade = ? WHERE id = ?";
    // Usando o método 'execute' para executar a query com os parâmetros fornecidos
    const [result] = await pool.execute(query, [nome, email, idade, id]);
    return result;  // Retorna o resultado da operação (o cliente atualizado)
};

// Excluir Cliente
exports.deleteCliente = async (id) => {
    // Query para excluir um cliente da tabela 'clientes'
    const query = "DELETE FROM clientes WHERE id = ?";
    // Usando o método 'execute' para executar a query com o id do cliente a ser excluído
    const [result] = await pool.execute(query, [id]);
    return result;  // Retorna o resultado da operação (cliente excluído)
};

// Obter Clientes
exports.getClientes = async () => {
    // Query para selecionar todos os clientes da tabela 'clientes'
    const query = "SELECT * FROM clientes";
    // Usando o método 'execute' para executar a query e obter os resultados
    const [clientes] = await pool.execute(query);
    return clientes;  // Retorna todos os clientes encontrados
};
