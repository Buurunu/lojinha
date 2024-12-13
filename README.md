# Lojinha

Bem-vindo ao repositório **Lojinha**! Este projeto tem como objetivo desenvolver uma aplicação web/mobile para gestão e visualização de produtos, permitindo a criação, edição e exclusão de itens, além de funcionalidades relacionadas à administração de uma loja virtual.

## 📜 Sobre o Projeto

O **Lojinha** foi criado para demonstrar o funcionamento básico de uma aplicação de loja virtual. Ele inclui recursos como:

- Cadastro de produtos com informações detalhadas (nome, preço, descrição, etc.).
- Listagem e pesquisa de produtos.
- Interface para edição e exclusão de produtos.
- Suporte para gerenciamento básico de usuários (se aplicável).

## 🚀 Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias e ferramentas:

- Node.js: Plataforma que permite executar JavaScript no lado do servidor.

- Express.js: Framework utilizado para gerenciar rotas e middleware de forma eficiente.

- MySQL: Sistema de gerenciamento de banco de dados relacional usado para armazenar dados.

## 📂 Estrutura do Repositório

```plaintext
lojinha/
├── src/               # Código-fonte principal
├── public/            # Arquivos estáticos
├── docs/              # Documentação adicional
├── tests/             # Testes automatizados
└── README.md          # Documentação do projeto
```

## 🛠️ Como Configurar o Projeto

### Pré-requisitos

- Node.js (v16 ou superior).

- MySQL (v8 ou superior).

- Gerenciador de pacotes: npm ou yarn.

### Passos para Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/Buurunu/lojinha.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd lojinha
   ```

3. Instale as dependências:

   ```bash
    npm install
   ```

4. Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto e preencha com as seguintes informações:

DB_HOST=localhost

DB_USER=seu_usuario

DB_PASSWORD=sua_senha

DB_NAME=nome_do_banco

PORT=3666

5. Inicialize o banco de dados:
 
   Verifique se o servidor MySQL está instalado, configurado e em execução. Em seguida, crie o banco de dados especificado na variável DB_NAME com o seguinte comando SQL:
 ```bash 
CREATE DATABASE nome_do_banco;
 ```
6. Inicie o servidor:

   ```bash
   npm start
   ```
7. Acesse o projeto no navegador:

   ```
   http://localhost:3666
   http://localhost:3666/produtos
   http://localhost:3666/clientes
   http://localhost:3666/compras
   ```


## 📝 Licença

Este projeto está licenciado sob a MIT License. Consulte o arquivo `LICENSE` para obter mais informações.

## 🤝 Contribuição

Sinta-se à vontade para contribuir com o projeto! Basta seguir as etapas:

1. Faça um fork do repositório
2. Crie uma branch para sua funcionalidade (`git checkout -b minha-funcionalidade`)
3. Commit suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça o push para a branch (`git push origin minha-funcionalidade`)
5. Abra um Pull Request

### Agradecemos por visitar este repositório e esperamos que seja útil!
