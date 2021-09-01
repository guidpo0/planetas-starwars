## Informações Gerais

Projeto desenvolvido durante formação em desenvolvedor Web Full Stack pela Trybe.

# Boas vindas ao repositório do projeto Planetas Starwars!

Essa aplicação têm a intenção de proporcionar ao(à) usuário(a) acesso à informações de diversos planetas do universo Starwars! O(a) usuário(a) vai ter acesso a uma lista de planetas, também há a opção de realizar filtros nesta lista para procurar por planetas específicos, com os filtros é possível realizar uma busca pelo nome ou por informações mensuráveis dos planetas e ainda é possível ordernar esses resultados!

Lembrando que esta aplicação corresponde aos meus esforços para melhorar minhas hard skills e soft skills sinta-se à vontade para explorá-la! Feedbacks construtivos são sempre bem vindos! Abaixo você poderá encontrar mais informações técnicas sobre este projeto.

---

# Sumário

- [Habilidades](#habilidades)
- [Intruções para fazer o fork do repositório](#intruções-para-fazer-o-fork-do-repositório)
- [Informações do projeto](#informações-do-projeto)
  - [Linter](#linter)
  - [API's](#apis)
    - [Starwars Planets API](#starwars-planets-api)


- [Como desenvolver](#como-desenvolver)
  - [Linter](#linter)
- [Requisitos do projeto](#requisitos-do-projeto)
  - [Lista de requisitos](#lista-de-requisitos)

    `Requisitos obrigatórios:`
    - [1 - Faça uma requisição para o endpoint /planets da API de Star Wars e preencha uma tabela com os dados retornados, com exceção dos da coluna residents](#1---faça-uma-requisição-para-o-endpoint-planets-da-api-de-star-wars-e-preencha-uma-tabela-com-os-dados-retornados-com-exceção-dos-da-coluna-residents)
    - [2 - Filtre a tabela através de um texto, inserido num *campo de texto*, exibindo somente os planetas cujos nomes incluam o texto digitado](#2---filtre-a-tabela-através-de-um-texto-inserido-num-campo-de-texto-exibindo-somente-os-planetas-cujos-nomes-incluam-o-texto-digitado)
    - [3 - Crie um filtro para valores numéricos](#3---crie-um-filtro-para-valores-numéricos)
    - [4 - Não utilize filtros repetidos](#4---não-utilize-filtros-repetidos)
    - [5 - Apague o filtro de valores numéricos e desfaça as filtragens dos dados da tabela ao clicar no ícone de X de um dos filtros](#5---apague-o-filtro-de-valores-numéricos-e-desfaça-as-filtragens-dos-dados-da-tabela-ao-clicar-no-ícone-de-x-de-um-dos-filtros)
    
    `Requisitos bônus:`
    - [6 - Ordene as colunas de forma ascendente ou descendente](#6---ordene-as-colunas-de-forma-ascendente-ou-descendente)
- [Depois de terminar o desenvolvimento (opcional)](#depois-de-terminar-o-desenvolvimento-opcional)
- [Revisando um pull request](#revisando-um-pull-request)
- [Avisos Finais](#avisos-finais)

---

# Habilidades

Nesse projeto, fui capaz de:

* Utilizar a Context API do React para gerenciar estado
* Utilizar o React Hook useState
* Utilizar o React Hook useContext
* Utilizar o React Hook useEffect
* Utilizar RTL e Jest para ler e interpretar testes

---

# Instruções para fazer o fork do repositório

1. Faça o fork do repositório

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start`

---

# Informações do projeto

### Linter

Para garantir a qualidade do código de forma a tê-lo mais legível, de mais fácil manutenção e seguindo as boas práticas de desenvolvimento foi utilizado neste projeto o linter `ESLint`.

## APIs

### Starwars Planets API

A API utilizada neste projeto pode ser consultada [nesse link](https://swapi-trybe.herokuapp.com/api/planets/). Se refere a um banco de dados com informações de planetas do universo Starwars.

---