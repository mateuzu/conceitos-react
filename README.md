

<h1>Axios: Biblioteca de comunicação HTTP</h1>

Bibliotecas de comunicação HTTP em React são bibliotecas que permitem que a aplicação React faça requisições HTTP para uma API e receba respostas. Essas bibliotecas são responsáveis por lidar com a comunicação entre o frontend e o backend da aplicação, permitindo que o usuário veja e interaja com os dados que são armazenados no servidor.

As bibliotecas de comunicação HTTP mais comuns em React são o `Axios`, `Fetch` e `jQuery`. Cada uma dessas bibliotecas tem suas próprias vantagens e desvantagens e, em geral, são utilizadas para realizar operações de CRUD (Create, Read, Update, Delete) em um backend.

Essas bibliotecas normalmente utilizam o conceito de `Promises` ou `Callbacks` para realizar as requisições HTTP de forma assíncrona e lidar com a resposta. Isso significa que a requisição é feita em segundo plano, enquanto a aplicação continua a funcionar normalmente, e quando a resposta é recebida, a biblioteca chama uma função de retorno para lidar com os dados.

No React, essas bibliotecas podem ser utilizadas em conjunto com os `hooks`, como o `useState` e o `useEffect`, para armazenar e exibir os dados recebidos da API. Por exemplo, é possível fazer uma requisição para uma API no momento em que um componente é montado usando o `useEffect` e, em seguida, armazenar os dados recebidos no estado da aplicação com o `useState`, para que possam ser exibidos na tela.

ao utilizar bibliotecas de comunicação HTTP em React, é possível:

- Realizar operações de CRUD (Create, Read, Update, Delete) em um backend;
- Enviar e receber dados de forma assíncrona, sem precisar recarregar a página;
- Exibir dados dinamicamente na aplicação, sem precisar recarregar a página;
- Manter a aplicação responsiva e fluida, mesmo enquanto espera pela resposta da API;
- Lidar com erros de forma eficiente, exibindo mensagens de erro na interface do usuário.

<h3>1.1 👣 Axios em React </h3>

`Axios` é uma biblioteca JavaScript utilizada para realizar requisições HTTP, tanto para recuperar dados quanto para enviar dados para uma API. É comumente utilizada em aplicações React para realizar operações de CRUD (Create, Read, Update, Delete) em um backend.

A vantagem do `Axios` é que ele é fácil de usar e fornece uma série de recursos úteis para lidar com requisições HTTP, como o suporte a Promises, intercepção de requisições e respostas, cancelamento de requisições, entre outros.

Alguns dos principais recursos do `Axios` são:

- Suporte a Promises: o `Axios` retorna uma Promise, o que facilita o tratamento da resposta da requisição;
- Intercepção de requisições e respostas: o `Axios` permite que as requisições e respostas sejam interceptadas para serem modificadas ou tratadas de forma específica antes de serem enviadas ou exibidas na aplicação;
- Suporte a cancelamento de requisições: o `Axios` permite que as requisições sejam canceladas, caso necessário, o que pode melhorar a performance da aplicação;
- Suporte a configurações globais: o `Axios` permite que configurações globais sejam definidas para todas as requisições feitas pela aplicação, como headers, por exemplo.

<h3>1.1 👣 Instalando Axios em react </h3>

Primeiro vamos construir o nosso para isso precisamos instalar a bibliotecareact

1. digite em seu terminal:

   ```bash
   yarn add axios@1.3.4
   ```

<br />

<h3>1.2 👣 Service em React </h3>

Em React, um "service" é um módulo ou uma classe que encapsula uma funcionalidade específica da aplicação, como o acesso a uma API, a manipulação de dados, a autenticação de usuários, entre outros. Esses serviços geralmente contêm métodos que realizam operações assíncronas, como a realização de requisições HTTP, e retornam Promises com os resultados dessas operações.

Um dos principais objetivos de utilizar serviços em React é separar as responsabilidades da aplicação, tornando o código mais organizado e fácil de manter. Além disso, o uso de serviços também permite reutilizar a lógica de negócio em diferentes partes da aplicação, sem precisar duplicar código.

O serviço com Axios em React é uma forma de fazer requisições HTTP de forma assíncrona em aplicações web. Essas requisições são importantes para obter dados de APIs externas, enviar dados para o servidor, ou até mesmo para realizar atualizações em tempo real na interface do usuário.

O Axios é uma biblioteca muito popular e fácil de usar que permite fazer requisições HTTP de forma simples e eficiente. Ele é muito utilizado em projetos React devido à sua simplicidade e recursos avançados, como a capacidade de cancelar requisições, configurações de tempo limite e interceptadores de requisição e resposta.

Ao utilizar o serviço com Axios em React, você pode separar a lógica de acesso à API em um módulo separado, tornando seu código mais organizado e fácil de manter. Além disso, você pode usar o Axios para lidar com erros e exceções, bem como para realizar autenticação de usuários.

<h3>1.2 👣Exemplo de service com axios em React </h3>

Esse é um exemplo de como utilizar a biblioteca Axios para realizar uma requisição GET a uma API.

```javascript
import axios from 'axios';

axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

Primeiro, é feito o import da biblioteca Axios através da sintaxe `import axios from 'axios'`. Em seguida, é utilizada a função `axios.get()` para fazer uma requisição do tipo GET para a URL `/user` passando como parâmetro um objeto que contém o ID `12345`.

Ao utilizar a função `.then()` na resposta da requisição, estamos definindo uma função que será executada caso a requisição seja bem-sucedida, ou seja, quando a API retornar uma resposta. Nesse caso, estamos imprimindo no console a resposta da API utilizando a função `console.log(response)`.

Caso ocorra algum erro na requisição, podemos utilizar a função `.catch()`.

<br />

<div align="left"><img src="https://i.imgur.com/A94hGdN.png" title="source: imgur.com" width="4%"/> <a href="https://axios-http.com/" target="_blank"><b>Axios</b></a></div>

<div align="left"><img src="https://i.imgur.com/A94hGdN.png" title="source: imgur.com" width="4%"/> <a href="https://www.npmjs.com/package/axios" target="_blank"><b>Axios - Documentação</b></a></div>

<br />
<br />
<br />
<h1>Context API: Estado global da aplicação React</h1>

Quando um componente depende do estado de outro componente, é necessário passar esse estado através de propriedades (props) de pai para filho. Isso pode levar a uma cadeia longa de propriedades que precisam ser passadas, conhecida como "prop drilling". Além disso, se um componente precisar atualizar o estado que é compartilhado com outros componentes, ele precisará passar essa atualização através de seus componentes pai, tornando o código mais complexo e difícil de manter.

Uma solução é o uso do Context API do React, que permite compartilhar o estado em uma árvore de componentes sem a necessidade de passar propriedades manualmente. O Context API pode ser uma alternativa mais leve ao uso de gerenciadores de estado para aplicações menores e menos complexas.

<h3>1.1 👣 Context API </h3>

O Context API é uma ferramenta da biblioteca React do JavaScript que permite o armazenamento de dados em uma "árvore" de objetos que podem ser acessados de forma global dentro de um aplicativo. Essa árvore é conhecida como "contexto" e pode ser usada para compartilhar informações entre diferentes componentes da interface do usuário sem precisar passar as informações manualmente entre os componentes.

O Context API é útil para situações em que vários componentes precisam compartilhar informações em comum, como por exemplo, informações de autenticação do usuário, tema da aplicação, preferências do usuário, etc. Em vez de passar essas informações para cada componente manualmente, o Context API permite armazená-las em um local centralizado e acessá-las em qualquer lugar da aplicação.

Para utilizar o Context API, é necessário criar um contexto com a função createContext(), que retorna um objeto contendo um Provider e um Consumer. O Provider é responsável por fornecer o contexto para os componentes filhos, enquanto o Consumer é responsável por acessar o contexto dentro de um componente.

O Provider recebe um valor como propriedade, que é o objeto que será compartilhado entre os componentes filhos. O Consumer é usado dentro de um componente para acessar o valor do contexto.

O Context API é uma alternativa ao gerenciamento de estado através da propagação de propriedades de componente em componente. Ele é útil para gerenciar estados globais de aplicativos e pode ser uma maneira mais eficiente de lidar com a comunicação entre componentes. No entanto, é importante ter em mente que o uso excessivo do Context API pode levar a problemas de desempenho, e deve ser utilizado com moderação e cuidado.

**O uso da Context API do React para gerenciar o estado global em uma aplicação é importante por diversas razões.**

1. Em primeiro lugar, a Context API oferece uma maneira mais simples e eficiente de compartilhar o estado entre componentes em diferentes níveis da árvore de componentes, sem a necessidade de passar o estado manualmente através das propriedades. Isso pode tornar o código mais limpo, legível e fácil de manter, especialmente em aplicações com muitos componentes que precisam compartilhar o mesmo estado.

2. Além disso, a Context API oferece uma maneira de criar um "contêiner" para o estado global da aplicação. Isso permite que o estado seja mantido em um único local, em vez de estar disperso em diferentes componentes, o que pode tornar o código mais organizado e mais fácil de entender.

3. Outra vantagem do uso da Context API é a capacidade de atualizar o estado global em um único local e fazer com que essa atualização seja propagada automaticamente para todos os componentes que dependem desse estado. Isso pode ajudar a evitar problemas de sincronização de estado em diferentes partes da aplicação e reduzir a probabilidade de erros.

4. Além disso, a Context API oferece a capacidade de fornecer valores padrão para o estado global da aplicação, o que pode ajudar a garantir que a aplicação não quebre ou pare de funcionar se um componente não conseguir encontrar um estado específico.

5. Por fim, o uso da Context API para gerenciar o estado global em uma aplicação React pode ajudar a tornar a aplicação mais escalável e mais fácil de manter à medida que ela cresce e se torna mais complexa. Ao manter o estado global em um único local e fornecer uma maneira simples e eficiente de compartilhar o estado entre componentes, a Context API pode ajudar a evitar problemas comuns de gerenciamento de estado em aplicações React, como a propagação excessiva de propriedades ou problemas de sincronização de estado.
<br />
<br />
<br />
﻿﻿

﻿﻿﻿﻿﻿﻿<h1>Arquitetura de um projeto React</h1>

A arquitetura de pasta em um projeto React é muito importante porque ajuda a organizar o código de uma forma lógica e fácil de entender, o que é essencial para manter o projeto escalável, fácil de manter e colaborativo.

Uma boa arquitetura de pasta pode ajudar a separar as responsabilidades de cada componente e módulo do projeto, e também facilitar a navegação e a localização de arquivos. Além disso, uma estrutura bem definida pode facilitar a reutilização de componentes em diferentes partes do projeto, bem como em outros projetos.

Uma arquitetura de pasta bem definida para um projeto React geralmente envolve a organização de arquivos por tipo (componentes, estilos, imagens, etc.) ou por recurso (páginas, rotas, autenticação, etc.). A escolha do tipo de organização dependerá do tamanho e da complexidade do projeto, mas o importante é manter uma estrutura clara e consistente em todo o código.

<h3>1.1 👣 Arquitetura de pastas em React </h3>

<div align="center"><img src="https://i.imgur.com/r8qlxnB.png" title="source: imgur.com" /></div>

Existem várias maneiras de organizar um projeto React, mas geralmente as pastas mais comuns são `pages`, `components`, `services` ,`contexts` e `assets`. Abaixo, vou explicar brevemente a função de cada uma delas:

- **`pages`:** A pasta `pages` geralmente contém os componentes que correspondem às páginas ou rotas da aplicação. Cada página é geralmente composta por vários componentes, como formulários, botões, gráficos, tabelas, etc. Esses componentes são agrupados em uma pasta específica dentro de `pages` e são responsáveis por renderizar a página correta com base na URL ou rota.
- **`components`:** A pasta `components` contém os componentes reutilizáveis da aplicação. Esses componentes podem ser usados em várias páginas ou em outros componentes para ajudar a evitar a duplicação de código. Os componentes em `components` são geralmente compostos por um conjunto de subcomponentes menores que podem ser reutilizados em outros lugares.
- **`services`:** A pasta `services` geralmente contém os arquivos de serviço da aplicação, que lidam com a comunicação com um servidor externo ou API. Esses arquivos geralmente são responsáveis por enviar e receber dados do servidor, realizar autenticação, tratar erros e outros processos relacionados à comunicação com o servidor.
- **`contexts`:** A pasta `contexts` contém os contextos da aplicação. Os contextos são uma forma de compartilhar dados entre componentes sem precisar passá-los manualmente de um componente para outro. Eles são úteis para compartilhar dados como autenticação, configurações, temas, etc. em toda a aplicação.
- **`assets`:** A pasta `assets` geralmente contém todos os recursos estáticos da aplicação, como imagens, ícones, arquivos de fonte e folhas de estilo. Esses recursos são agrupados em uma pasta específica para facilitar o gerenciamento e a importação nos componentes da aplicação.
- **`models`:** A pasta `models` pode conter modelos ou esquemas de dados que definem como os dados são organizados e estruturados na aplicação. Eles podem ser usados para validar e normalizar os dados antes de serem armazenados ou exibidos.
