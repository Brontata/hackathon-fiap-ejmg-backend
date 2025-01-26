# Hackathon FIAP EJMG - Desafio Backend

Este repositório contém a solução do desafio de backend do Hackathon FIAP EJMG.

## Objetivo

A aplicação é uma API desenvolvida para escolas, e permite o cadastro de professores e alunos. Atualmente, o foco é no ensino do idioma inglês, mas planeja-se expandir para outras matérias futuramente. Utilizando técnicas de inteligência artificial, a API gera questionários dinâmicos que auxiliam no aprendizado e na fixação do conteúdo ensinado. Esses questionários apresentam palavras em inglês e suas traduções, desafiando os alunos a escolherem a alternativa correta entre opções fornecidas de forma aleatória.

## Tecnologias utilizadas

<img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /> <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" /> <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" /> <img src="https://img.shields.io/badge/ChatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white" /> <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" /> 

## Setup inicial

Para executar a aplicação, execute os seguintes comandos:

1. Clone o repositório;
2. Entre na pasta do projeto;
3. Execute o comando `docker-compose up -d` para iniciar o banco de dados;
4. Execute `npm install` para instalar as dependências;
5. Execute `npm run dev` para executar a aplicação em modo de desenvolvimento;
6. Acesse a aplicação em `http://localhost:3333`.

## Arquitetura

A aplicação segue uma arquitetura baseada em camadas, dividindo responsabilidades e facilitando a manutenção e a escalabilidade do sistema. As principais camadas são:

1. **Camada de Apresentação (Rotas)**: Responsável por lidar com as requisições HTTP e direcioná-las para os controladores apropriados. Utiliza o Express.js para definir as rotas da aplicação.

2. **Camada de Controle (Controladores)**: Contém a lógica de controle da aplicação, recebendo as requisições das rotas e interagindo com os casos de uso para processar os dados.

3. **Camada de Casos de Uso (Use Cases)**: Implementa a lógica de negócios da aplicação, executando operações específicas como criação, leitura, atualização e exclusão de dados. Cada caso de uso representa uma ação concreta que pode ser realizada pelo sistema.

4. **Camada de Repositório (Repositórios)**: Responsável por acessar o banco de dados, realizando operações de leitura e escrita. Utiliza o Prisma como ORM para facilitar a interação com o banco de dados PostgreSQL.

5. **Camada de Serviços**: Contém serviços auxiliares que fornecem funcionalidades adicionais, como autenticação, autorização e integração com APIs externas, como a API de inteligência artificial.

6. **Banco de Dados**: Armazena os dados persistentes da aplicação, utilizando o PostgreSQL para garantir a integridade e a consistência das informações.

Com essa arquitetura, a aplicação mantém uma separação clara de responsabilidades, promovendo a reutilização de código e tornando o sistema mais fácil de entender e evoluir.