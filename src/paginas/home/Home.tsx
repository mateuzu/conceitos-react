import React, { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const { nome, setNome } = useContext(UserContext);

    return (
        <div className='flex justify-center items-center'>
            <div>
                <h2 className="text-slate-900 text-5xl  my-4">Logar</h2>
                <h2 className="text-slate-900 text-4xl ">Ola user : {nome}</h2>
                <Link to="/login" className="my-4 rounded bg-indigo-400 hover:bg-indigo-900 text-white w-1/2 py-2 flex justify-center">
                    Voltar
                </Link>
            </div>
        </div>
    );
}

export default Home;

/*
    Este é um exemplo de um componente React chamado Home que usa o hook useContext para acessar o contexto UserContext que foi definido em outro lugar do aplicativo.
    Além disso, o componente usa a API Link do React Router DOM para criar um link para a página de login.

    IMPORTS *
    O componente começa com a importação de algumas dependências, incluindo React, useContext, UserContext, Link e useNavigate.

    FUNCTION Home *
    Em seguida, a função Home é definida, que retorna o HTML a ser renderizado no navegador.
    Dentro da função Home, a constante { nome, setNome } é declarada e usa o hook useContext para acessar o objeto do contexto UserContext.
    O valor de "nome" é obtido do contexto para exibir uma mensagem personalizada para o usuário.

    RETURN *
    Em seguida, o HTML é renderizado no navegador, começando com uma div que tem um título "Logar" e uma mensagem personalizada de boas-vindas para o usuário.
    Finalmente, o componente renderiza um Link para a página de login com o texto "Voltar".
    Quando o usuário clica no link, ele é redirecionado para a página de login, onde pode entrar com um nome de usuário.

    Em resumo o componente home apresenta a informação de nome do UserContext e apresenta um botão de voltar que retorna a aplicação para a pagina login
*/