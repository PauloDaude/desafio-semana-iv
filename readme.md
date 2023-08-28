<h1 align="center" style="color: orange">
  Desafio da Semana IV
</h1>

### 🚨 Sobre

O desafio em questão se trata de fazer uma **cópia de 6 telas** de um formulário destinado a encontrar fracassos das pessoas nos mercados financeiros.

### 🎯 Objetivo

O objetivo do desafio é **provar o conhecimento** das tecnologias apreendidas através dos cursos até o momento assistidos, cursos esses de: 

- HTML
- CSS
- JavaScript 

<h2 align="center" style="color: #3fcca9">
  Estrutura do Projeto
</h2>

### 📁 Divisões de Pastas

As pastas do projeto foram divididas em 4, onde cada pasta contém apenas um tipo de arquivo:
- assets
  - svg 
- css
- js
- templates

### 🧑‍💻 Parte Lógica

A parte lógica do desafio está na pasta `js` e foi feita apenas com JavaScript, sem utilização do TypeScript, e os arquivos consistem em:
- form.js
- function.js
- success.js

<h2 align="center" style="color: #3fcca9">Features</h2>

### <span style="color: yellow">function.js</span>

O arquivo mais utilizado é o `function.js` pelo fato de conter as seguintes funções:

- `previousScreen()` - que é usada nos botões de voltar para tela anterior (back).
- `nextScreen(button)` - que é usada nos botões para ir para a tela seguinte (next) se caso as **validações** de outras funções retornarem `true`.

Há outras funções nesse arquivo que são as funções de validação de cada tipo de input do usuário, essas funções retornam `true` ou `false`:

- `validationSelect(actualFile)` - Função que verifica se alguma opção do `<select>` foi selecionada.

- `validationRadio(actualFile)` - Função que verifica se alguma opção dos inputs do tipo `radio` foi selecionado.

- `validationCheckbox(actualFile)` - Função que verifica se alguma opção dos inputs do tipo `checkbox` foi selecionado.

- `validationTextarea(actualFile)` - Função que verifica se o `textarea` contém entre 1 até 130 caracteres.

Há também uma outra função para mostrar o contador de caracteres do `textarea` na tela 5.

- `wordLength(event, text)` - Função que exibe a quantidade de caracteres digitados no `textarea`.

### <span style="color: yellow">form.js</span>

Um arquivo com funções e trechos de códigos que **validam os inputs de formulário** da última tela:

- `validationNameFull(nameFull)` - Função que verifica se foi digitado no campo de **Full Name** mais de um nome, para não aceitar um nome sozinho, por exemplo: "Lucas", ele só aceitará se tiver mais de 1 nome, por exemplo: "Lucas Araujo", pois se trata de um nome completo; retorna `true` ou `false`.
- `validationEmail(email)` - Função que verifica se foi digitado no campo **Email** um email válido, contendo o `@` e caracteres após o `@` também; retorna `true` ou `false`.
- `limit()` - Função que limita o input *Age* do formulário para 2 caracteres apenas.


### <span style="color: yellow">success.js</span>

Se trata de um arquivo destinado a informar o usuário que o formulário foi bem sucedido e também **exibi no console** as informações guardadas no **Local Storage** do navegador e que ao apertar o botão o **Local Storage** é limpado e redireciona para a primeira tela do Desafio.

<h2 align="center" style="color: #3fcca9">Como exeutar o projeto</h2>

### Para fazer isso tudo acontecer é bem simples, basta abrir o arquivo `tela1.html` (que está localizada na pasta `templates`) no seu navegador de preferência!