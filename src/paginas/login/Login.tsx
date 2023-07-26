import React, { useContext } from 'react';

import { UserContext } from '../../contexts/UserContext'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const { nome, setNome } = useContext(UserContext);
    let navigate = useNavigate()

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        navigate('/home')
    }

    return (
        <div className='flex justify-center items-center'>
            <form onSubmit={handleSubmit}>
                <h2 className="text-slate-900 text-5xl  m-4">Logar</h2>
                <div className="flex flex-col w-full">
                    <label htmlFor="usuario">Nome</label>
                    <input
                        type="text"
                        id="usuario"
                        name="usuario"
                        placeholder="Usuario"
                        className="border-2 border-slate-700 rounded p-2"
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                    />
                </div>
                <button type='submit' className="my-4 rounded bg-indigo-400 hover:bg-indigo-900 text-white w-1/2 py-2 flex justify-center">
                    <span>Entrar</span>
                </button>

            </form>

        </div>
    );
}

export default Login;

/*
    Este é um exemplo de um componente React chamado Login que usa o hook useContext para acessar o contexto UserContext que foi definido em outro lugar do aplicativo.
    Além disso, o componente usa a API useNavigate para manipular o histórico de navegação do React Router DOM.

    IMPORTS *
    O componente começa com a importação de algumas dependências, incluindo React, useContext, UserContext, Link e useNavigate. Em seguida, a função Login é definida, que retorna o HTML a ser renderizado no navegador.

    FUNCTION login *
    Dentro da função Login, a constante { nome, setNome } é declarada e usa o hook useContext para acessar o objeto do contexto UserContext.
    O valor de "nome" é obtido do contexto e a função "setNome" é usada para atualizar o valor de "nome" sempre que o usuário digita algo no input.

    Em seguida, a constante "navigate" é declarada usando o hook useNavigate para navegar para a página /home quando o formulário é enviado.

    RETURN *
    Depois disso, o HTML é renderizado no navegador, começando com um formulário que tem um título "Logar" e um input para que o usuário digite o nome.
    Quando o usuário digita algo no input, o valor é atualizado com a função "setNome".
    Finalmente, o componente renderiza um botão "Entrar" que é acionado quando o formulário é submetido.
    Quando o botão é clicado, a função "handleSubmit" é chamada, que cancela o comportamento padrão do formulário com event.preventDefault () e, em seguida, navega para a página /home com o useNavigate.

    Em resumo o componente de login capitura a informaçao do usuario e adiciona sobre UserContext para ser utilizada de forma global na aplicação no final ela redireciona a aplicação para a pagina home.
*/