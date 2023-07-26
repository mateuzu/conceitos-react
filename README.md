<h1>Criando Rotas com o React Router Dom</h1>

<h3>1.1 👣 Bibliotecas de roteamento em desenvolvimento front-end </h3>

Bibliotecas de roteamento em desenvolvimento front-end são conjuntos de ferramentas e funções que permitem que um aplicativo de front-end gerencie as rotas do navegador de forma eficiente e confiável. Essas bibliotecas geralmente são usadas em aplicativos de página única (SPA), que usam JavaScript para renderizar o conteúdo no navegador.

As bibliotecas de roteamento front-end mais populares incluem:

1. React Router: uma biblioteca de roteamento para aplicativos React, que permite definir rotas de forma declarativa e renderizar componentes baseados em URL.
2. Vue Router: uma biblioteca de roteamento para aplicativos Vue.js, que permite definir rotas de forma declarativa e renderizar componentes baseados em URL.
3. Angular Router: uma biblioteca de roteamento para aplicativos Angular, que permite definir rotas de forma declarativa e renderizar componentes baseados em URL.

Essas bibliotecas de roteamento ajudam a gerenciar a navegação em um aplicativo SPA, permitindo que os usuários naveguem pelo aplicativo sem recarregar a página inteira a cada mudança de rota. Além disso, as bibliotecas de roteamento fornecem recursos adicionais, como redirecionamentos, navegação programática e animações de transição, que ajudam a melhorar a experiência do usuário em um aplicativo de front-end.

**As bibliotecas de roteamento front-end oferecem várias vantagens para o desenvolvimento de aplicativos de página única (SPA):**

1. Gerenciamento de rotas: as bibliotecas de roteamento permitem que os desenvolvedores gerenciem as rotas do aplicativo de forma declarativa, definindo qual componente deve ser renderizado em cada URL. Isso simplifica o processo de desenvolvimento, já que os desenvolvedores não precisam se preocupar com o gerenciamento manual de URLs e estados de navegação.
2. Navegação suave: as bibliotecas de roteamento permitem que os usuários naveguem pelo aplicativo sem recarregar a página inteira a cada mudança de rota. Isso torna a navegação mais rápida e suave, criando uma experiência mais agradável para o usuário.
3. SEO-friendly: as bibliotecas de roteamento permitem que os desenvolvedores criem URLs significativos e amigáveis para SEO. Isso ajuda os mecanismos de pesquisa a entender melhor o conteúdo do aplicativo e indexá-lo adequadamente.
4. Modularidade: as bibliotecas de roteamento permitem que os desenvolvedores criem componentes reutilizáveis que podem ser facilmente integrados em várias partes do aplicativo. Isso ajuda a criar aplicativos mais modulares e escaláveis.
5. Recursos adicionais: as bibliotecas de roteamento fornecem recursos adicionais, como redirecionamentos, navegação programática e animações de transição. Esses recursos podem melhorar ainda mais a experiência do usuário em um aplicativo de front-end.

<h3>1.2 👣 React router dom </h3>

React Router DOM é uma biblioteca de roteamento para aplicativos React. Ele permite que você gerencie a navegação de uma página para outra sem atualizar a página inteira. A versão mais recente do React Router DOM é a versão 6.

A biblioteca React Router DOM 6 oferece uma API simplificada e fácil de usar para gerenciar as rotas de um aplicativo React. Ele fornece componentes que podem ser usados para definir rotas em seu aplicativo, como o `<Route>` e o `<Switch>`. Esses componentes permitem que você defina quais componentes serão renderizados com base na URL atual do aplicativo.

Além disso, a versão 6 do React Router DOM introduziu um novo recurso chamado de "Rotas Aninhadas", que permite que você aninhe rotas dentro de outras rotas, tornando mais fácil organizar e gerenciar rotas complexas.

Outro recurso interessante do React Router DOM 6 é o suporte para autenticação de rotas. Isso permite que você restrinja o acesso a determinadas rotas do aplicativo com base no estado de autenticação do usuário.

A biblioteca React Router DOM 6 também oferece suporte a várias opções de histórico de navegação, como o histórico de navegação do navegador, histórico de memória e histórico personalizado. Isso permite que você escolha a melhor opção de histórico de navegação para o seu aplicativo.

 **A seguir, destacam-se algumas razões pelas quais é importante usar o React Router DOM:**

1. Permite criar rotas dinâmicas: o React Router DOM permite criar rotas dinâmicas que podem ser facilmente modificadas ou atualizadas sem precisar alterar o código do aplicativo. Isso é muito útil em aplicativos que exigem a adição ou remoção frequente de rotas.
2. Gerencia a navegação de forma eficiente: a biblioteca gerencia a navegação do aplicativo de forma eficiente, evitando que a página inteira seja recarregada quando o usuário navega entre diferentes rotas. Isso torna a navegação mais rápida e fluida, melhorando a experiência do usuário.
3. Ajuda na organização do código: o React Router DOM ajuda a manter o código do aplicativo mais organizado, separando as rotas e as páginas em diferentes arquivos. Isso torna o código mais fácil de entender e gerenciar, especialmente em aplicativos com muitas rotas e páginas.
4. Permite navegação aninhada: a biblioteca permite navegação aninhada, o que significa que é possível ter rotas dentro de outras rotas. Isso é útil para organizar o aplicativo e definir rotas que dependem de outras rotas.
5. Facilita a autenticação de rotas: o React Router DOM oferece suporte à autenticação de rotas, o que significa que é possível restringir o acesso a determinadas rotas com base no estado de autenticação do usuário. Isso é essencial para aplicativos que exigem login e que precisam proteger rotas específicas.

Existem duas formas de navegar em react-router dom 

```
 function handleClick() {   
 	navigate('/outra-rota');  
 } 
  return (
    <div>
      <button onClick={handleClick}>Navegar</button>
    </div>
  );
```

```
  <div>
      <Link to="/outra-rota">Ir para outra rota</Link>
  </div>
```

1. `useNavigate` é um hook fornecido pela biblioteca React Router que permite navegar programaticamente entre rotas em um aplicativo React.

     é invocado `navigate('/outra-rota')`, redirecionando o usuário para a rota especificada (`/outra-rota`).

2. A tag `<Link>` é uma componente fornecida pela biblioteca `react-router-dom` que permite criar links de navegação em um aplicativo React. Ela é usada em conjunto com o React Router para facilitar a navegação entre as rotas sem recarregar a página inteira.

   É importante notar que o atributo `to` da tag `<Link>` especifica a rota de destino para onde o usuário será navegado. O valor desse atributo pode ser uma string representando a URL da rota ou um objeto que define a rota com mais detalhes.

<br />

<div align="left"><img src="https://i.imgur.com/ey5iP4N.png" title="source: imgur.com" width="4%"/> <a href="https://reactrouter.com/en/main" target="_blank"><b>React Router DOM</b></a></div>

<br />

<h3>1.3 👣 Instalando o React router dom </h3>

Priemiro vamos construir o nosso para isso precisamos instalar a bibliotecareact

1. digite em seu terminal:

   ```
   npm i react-router-dom
   ```


1. `<BrowserRouter>` - O componente `BrowserRouter` é importado da biblioteca React Router DOM e é usado para envolver todo o conteúdo que precisa de roteamento.
2. `<Routes>` - O componente `Routes` é importado da biblioteca React Router DOM e é usado para definir as rotas do aplicativo.
3. `<Route path="/" element={<Home />} />` - Uma rota que é definida usando o componente `Route`. O caminho da rota é definido como `'/'` (que representa a página inicial do aplicativo) e o elemento a ser renderizado é definido como `<Home />` (o componente que representa a página inicial).
4. `<Route path="/login" element={<Login />} />` - Uma rota que é definida usando o componente `Route`. O caminho da rota é definido como `'/login'` e o elemento a ser renderizado é definido como `<Login />` (o componente que representa a página de login).
5. `<Route path="/home" element={<Home />} />` - Uma rota que é definida usando o componente `Route`. O caminho da rota é definido como `'/home'` e o elemento a ser renderizado é definido como `<Home />` (o componente que representa a página inicial).

<br />

<div align="left"><img src="https://i.imgur.com/ey5iP4N.png" title="source: imgur.com" width="4%"/> <a href="https://reactrouter.com/en/main/router-components/browser-router" target="_blank"><b>Documentação do React Router - BrowserRouter</b></a></div>

<div align="left"><img src="https://i.imgur.com/ey5iP4N.png" title="source: imgur.com" width="4%"/> <a href="https://reactrouter.com/en/main/components/routes" target="_blank"><b>Documentação do React Router - Routes</b></a></div>

<div align="left"><img src="https://i.imgur.com/ey5iP4N.png" title="source: imgur.com" width="4%"/> <a href="https://reactrouter.com/en/main/route/route" target="_blank"><b>Documentação do React Router - Route</b></a></div>

<br />