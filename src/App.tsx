import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'; //importando biblioteca AXIOS

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users') //utilizando o método axios.get para realizar uma requisição GET para a URL informada
      .then(response => { //then = Função que será executada caso a requisição seja bem sucedidade, ou seja, quando a API retornar uma resposta
        setUsers(response.data); //setando o useState com as respostas da requisição
      })
      .catch(error => { //caso ocorra algum erro, será capturado pelo catch
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de usuários</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

/*
  Bibliotecas de comunicação HTTP em React são bibliotecas que permitem que a aplicação React faça requisições HTTP para uma API e receba respostas.
  Essas bibliotecas são responsáveis por lidar com a comunicação entre o frontend e o backend da aplicação, permitindo que o usuário veja e interaja com os dados que são armazenados no servidor.
  As bibliotecas de comunicação HTTP mais comuns em React são o Axios, Fetch e jQuery. Cada uma dessas bibliotecas tem suas próprias vantagens e desvantagens e, em geral, são utilizadas para realizar operações de CRUD (Create, Read, Update, Delete) em um backend.

  Essas bibliotecas normalmente utilizam o conceito de Promises ou Callbacks para realizar as requisições HTTP de forma assíncrona e lidar com a resposta.
  Isso significa que a requisição é feita em segundo plano, enquanto a aplicação continua a funcionar normalmente, e quando a resposta é recebida, a biblioteca chama uma função de retorno para lidar com os dados.

  AXIOS EM REACT:
  Axios é uma biblioteca JavaScript utilizada para realizar requisições HTTP, tanto para recuperar dados quanto para enviar dados para uma API.
  É comumente utilizada em aplicações React para realizar operações de CRUD (Create, Read, Update, Delete) em um backend.
  A vantagem do Axios é que ele é fácil de usar e fornece uma série de recursos úteis para lidar com requisições HTTP, como o suporte a Promises, intercepção de requisições e respostas, cancelamento de requisições, entre outros.


  SERVICE EM REACT:
  Em React, um "service" é um módulo ou uma classe que encapsula uma funcionalidade específica da aplicação, como o acesso a uma API, a manipulação de dados, a autenticação de usuários, entre outros.
  Esses serviços geralmente contêm métodos que realizam operações assíncronas, como a realização de requisições HTTP, e retornam Promises com os resultados dessas operações.

  Um dos principais objetivos de utilizar serviços em React é separar as responsabilidades da aplicação, tornando o código mais organizado e fácil de manter.
  Além disso, o uso de serviços também permite reutilizar a lógica de negócio em diferentes partes da aplicação, sem precisar duplicar código.

  O serviço com Axios em React é uma forma de fazer requisições HTTP de forma assíncrona em aplicações web.
  Essas requisições são importantes para obter dados de APIs externas, enviar dados para o servidor, ou até mesmo para realizar atualizações em tempo real na interface do usuário.

  
  CONTEXT API:
  Quando um componente depende do estado de outro componente, é necessário passar esse estado através de propriedades (props) de pai para filho. Isso pode levar a uma cadeia longa de propriedades que precisam ser passadas, conhecida como "prop drilling".
  Além disso, se um componente precisar atualizar o estado que é compartilhado com outros componentes, ele precisará passar essa atualização através de seus componentes pai, tornando o código mais complexo e difícil de manter.

  Uma solução é o uso do Context API do React, que permite compartilhar o estado em uma árvore de componentes sem a necessidade de passar propriedades manualmente.

  O Context API é uma ferramenta da biblioteca React do JavaScript que permite o armazenamento de dados em uma "árvore" de objetos que podem ser acessados de forma global dentro de um aplicativo.
  Essa árvore é conhecida como "contexto" e pode ser usada para compartilhar informações entre diferentes componentes da interface do usuário sem precisar passar as informações manualmente entre os componentes.

  O Context API é útil para situações em que vários componentes precisam compartilhar informações em comum, como por exemplo, informações de autenticação do usuário, tema da aplicação, preferências do usuário, etc.
  Em vez de passar essas informações para cada componente manualmente, o Context API permite armazená-las em um local centralizado e acessá-las em qualquer lugar da aplicação.

  Para utilizar o Context API, é necessário criar um contexto com a função createContext(), que retorna um objeto contendo um Provider e um Consumer.
  O Provider é responsável por fornecer o contexto para os componentes filhos, enquanto o Consumer é responsável por acessar o contexto dentro de um componente.

  O Provider recebe um valor como propriedade, que é o objeto que será compartilhado entre os componentes filhos.
  O Consumer é usado dentro de um componente para acessar o valor do contexto.
*/