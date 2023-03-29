# Pokédex

Olá! Nessa documentação você vai saber mais sobre esse aplicativo, como rodar, o que usa e etc.

## Objetivos

Esse aplicativo nasceu com o objetivo de ser uma Pokédex bastante simples e funcional no modelo de tabela usando a lib de ui Ant Design.

## Arquitetura

Nesse projeto decidi criar uma arquitetura inspirada no **MVC (Model, View, Controller)**.
Certo, mas por quê? Mesmo no front-end é necessário ter um padrão de arquitetura a ser seguido, para que as responsabilidades de cada parte do projeto não sejam misturadas e tenhamos problemas com manutenção, escalabilidade, componentização, desacoplamento e outros no futuro.

## Pastas

#### Assets

Pasta onde ficam todos os arquivos estáticos da aplicação, imagens, svgs, fontes e etc.

#### Components

Uma das pastas da arquitetura do projeto, ela representa a **View**. Essa pasta possui todos os componentes visuais que recebem e utilizam as props através da controller e utiliza a ideia de **Units & Compounds**, units são pequenos pedaços de código como um H1 e compounds são dois ou mais units juntos.

#### Constants

Essa pasta contém os arquivos que são constantes do projeto, variáveis que são usadas em componentes, arrays com informações para maps, array com nomes dos headers das tabelas e etc.

#### Container

Uma das pastas da arquitetura MVC, ela serve como a **controller**, possui as funções e os estados que serão usados nos componentes e compartilha isso com eles através de uma ContextAPI, dessa forma criando uma camada com os dados necessários ao redor de cada página.

#### Hooks

Onde estão os hooks customizados necessários para a aplicação, como os hooks das context apis, por exemplo.

#### Libs

Aqui estão as configurações de bibliotecas externas como o Axios, por exemplo.

#### Models

Aqui ficam todas as tipagens necessárias dos componentes, mappers, requisições e etc.

#### Store

Essa pasta representa a **Model** do MVC, ela contém todas as requisições para API's externas, regras de negócios, inicialização das ContextAPI's que servirão a controller, providers necessários e os mappers.

#### Contexts

A pasta com todas as ContextApi's utilizadas no projeto, alguns arquivos são apenas inicializações para serem usadas dentro da pasta container.

#### Mappers

É a pasta aonde ficam as funções que mapeiam os dados retornados das api's e devolvem já formatados de acordo com a necessidade do componente.

#### Services

Pasta onde estão as funções que executam serviços, como fazer uma requisição numa api e retornar os dados, por exemplo.

#### Theme

Contém todos os arquivos necessários para o estilo global da aplicação, como reset css.

#### Utils

Aqui estão as funções que podem ser usadas em componentes ou em outras funções no projeto, como uma função que realiza um search dentro de um objeto.

## Tecnologias

O aplicativo foi construído principalmente com React e TypeScript utilizando Function Components com Hooks e utilizando o Vite para o build do projeto.
A lib de UI utilizada é o Ant Design, acredito que ele trabalha muito bem com o React e não provê somente estilos mas também uma maneira muito simples de trabalhar com os estados na aplicação.
Axios para a requisição.
Styled Components para estilização.
Lodash como lib auxiliar.

## Como rodar

Primeiro execute `npm i` para instalar as dependências e depois `npm run dev` para executar o projeto localmente

## Links úteis

Vite: https://vitejs.dev/
MVC: https://www.devmedia.com.br/introducao-ao-padrao-mvc/29308
Styled Components: https://styled-components.com/docs
Api: https://unpkg.com/pokemons@1.1.0/pokemons.json

## Divirta-se! :)
