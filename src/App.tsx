import UserProvider from './contexts/UserContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';


function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>

      </BrowserRouter>

    </UserProvider>
  );
}

export default App;

/*
  Este é um exemplo de um componente React chamado App que é o componente raiz do aplicativo.
  Ele usa o React Router DOM para criar rotas para diferentes páginas em nosso aplicativo, e também usa um contexto chamado UserContext, que foi definido em outro lugar do aplicativo.

  IMPORT *
  O componente começa com a importação de algumas dependências, incluindo React, UserProvider, BrowserRouter, Route e Routes.

  FUNCTION App *
  Em seguida, a função App é definida, que retorna o HTML a ser renderizado no navegador.

  USER PROVIDER *
  Dentro da função App, o componente UserProvider é renderizado e envolve todo o conteúdo do aplicativo.
  Isso permite que outros componentes acessem o contexto definido pelo UserProvider.

  BROWSER ROUTER *
  Em seguida, o componente BrowserRouter é renderizado, que fornece a funcionalidade de roteamento para o aplicativo.
  Dentro do BrowserRouter, o componente Routes é definido, que define as rotas para diferentes páginas.

  ROUTES *
  Existem três rotas definidas no exemplo, cada uma com um elemento de página associado.
  A primeira rota é a raiz do aplicativo ("/"), que redireciona o usuário para a página de login. - <Route path="/" element={<Login />} />
  A segunda rota é a página de login ("/login"), que renderiza o componente Login. - <Route path="/login" element={<Login />} />
  A terceira rota é a página Home ("/home"), que renderiza o componente Home. - <Route path="/home" element={<Home />} />

  EXPORT defalut App *
  Por fim, o componente App é exportado para que possa ser usado em outros arquivos do aplicativo.

  Em resumo modifique o componente de App.tsx para receber o UserContext sobre toda a aplicação pra isso construa uma tag de UserProvider que emcobre toda a aplicação
  Em seguida construa um sistema de rotas para home e login, todos os componentes que tiverem dentro de UserProvider consiguirão acessar e modificar a informação de nome do ContextAPI.
*/