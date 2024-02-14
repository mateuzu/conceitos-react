import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';

import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {
    let navigate = useNavigate(); //useNavigate = Redireciona o usuário de uma página para outra sem recarregar a página, neste caso, foi atribuída à uma variavel

    //constante de estado para guardar as informações de login definidas na model UsuarioLogin (id, nome, email e etc)
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>( //useState = guarda a informação de estado do Usuario logado e envia para o backend para tentar realizar o login. Dessa forma o React pode verificar o estado dessa variavel a fim de verificar se houve alterações
        {} as UsuarioLogin //{} as UsuarioLogin = atalho do React que indica que o objeto está vazio, porém dentro dele possui todas as propriedades definidas no objeto UsuarioLogin (id, nome, e-mail e etc)
    );

    /*
        ATALHO {} as Object
        Por padrão, ao declarar um objeto na constante de estado é necessário informar o tipo do Objeto e inicializar todas suas propriedades, conforme exemplo abaixo:
            const [usuario, setUsuario] = useState<UsuarioLogin>({
                id: 0, 
                nome: "",
                usuario: "",
                senha: "",
                foto: "",
                token: ""
        Porém, dessa maneira o código pode ficar extenso demais.
        Dessa maneira, o react possui o atalho {} as Object = Com isso, não é necessário inicializar todas as propiedades do Objeto, pois o react considera esse atalho como as propriedades do objeto
    */

    const { usuario, handleLogin } = useContext(AuthContext); //useContext = permite que o componente possa acessar as informações centralizadas no contextos, dessa forma podemos utilizar usuario, handleLogin e etc

    const { isLoading } = useContext(AuthContext) //useContext = permite que o componente possa acessar as informações centralizadas no contextos


    //e: ChangeEvent<HTMLInputElement> = Evento de mudança do elemento input, por ex: toda vez que algo é digitado em um formulário, pode ser considerada uma mudança de estado do elemento input | É uma forma de acessar um elemento input a partir de um evento
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) { //Função acessa um input para guardar a informação digitada. Utilizamos o parametro 'e' com o tipo ChangeEvent<HTMLInputElement> para captar as mudanças e identificar em qual input essa mudança foi realizada
        setUsuarioLogin({ //Atualizando o objeto UsuarioLogin
            ...usuarioLogin, //... Spread Operator (Operador de espalhamento) = Verifica o objeto e espalha suas propriedades, ou seja, pega todos os campos e disponibiliza para atualização
            [e.target.name]: e.target.value //estrutura dinâmica para guardar campos específicos de maneira dinâmica
            //e.target.name = input que está chamando essa função e acessando a propriedade name (por exemplo, o input 'usuário' é atualizado ao realizar o login, dessa forma o e.target.name será = usuario, pois é o nome do input que sofreu um evento de mudança)
            //e.target.value = input que está chamando a funçaõ e acessando o valor que foi digitado nele
        })
    }

    /*
        SPREAD OPERATOR
        Verifica as propriedades do objeto e as espalha, ou seja, pega todos os campos e dustribui para atualização
        Basicamente, esse operador tem o mesmo efeito de fazer isso:
        (Distribuindo as propriedades)
            id: ;
            nome: ;
            usuario: ;
            foto: ;
            senha: ;
            token: ;
        Para distribuir as propriedades do objeto para atualização de valores
    */

    //ChangeEvent<HTMLFormElement = Mudança de evento de formulário
    function login(e: ChangeEvent<HTMLFormElement>) { //Função tenta executar o login com as informações digitadas no input (ou seja, tenta executar o login com usuario, senha digitados)
        e.preventDefault() //por padrão, ao enviar(submit) um formulário a página é recarregada por conta da URL, essa linha e.preventDefault() evita que a página recarregue ao enviar um formulário
        handleLogin(usuarioLogin) //função do AuthContext para realizar o login
    }

    useEffect(() => { //useEffect = executa uma função sempre que sua variavel de dependencia sofrer alteração
        if (usuario.token !== "") { //Verifica se a propriedade token do usuário é diferente de vazio. Sempre que o usuário loga, um token é gerado, dessa forma, se o token NÃO estiver vazio significa que o usuário logou
            navigate('/home') //variavel navigate para direcionar o usuário para a página home caso o login for bem sucedido
        }
    }, [usuario]) //variavel de dependencia que o useEffect verifica se houve alteração


    return (
        //onSubmit={login} = Evento de mudança de formulário que dispara a função login sempre que o formulário for enviado
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold ">
                <form className="flex justify-center items-center flex-col w-1/2 gap-4" onSubmit={login}>
                    <h2 className="text-slate-900 text-5xl ">Entrar</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuario"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuarioLogin.usuario} //faz referencia a propriedade UsuarioLogin
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} //onChange = Evento de mudança que dispara a função atualizarEstado para guardar a informação digitada
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuarioLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <button type='submit' className="rounded bg-indigo-400 hover:bg-indigo-900 text-white w-1/2 py-2 flex justify-center">
                        {isLoading ? <RotatingLines //Chamando a variavel de estado isLoading para verificar se a página está carregando. Se sim, uma tela de loading será exibida. De inicio, a variavel isLoading foi definida como 'true'
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> : //Elemento que será renderizado se a condição for falsa
                            <span>Entrar</span>}
                    </button>

                    <hr className="border-slate-800 w-full" />

                    <p>
                        Ainda não tem uma conta?{' '}
                        <Link to="/cadastro" className="text-indigo-800 hover:underline">
                            Cadastre-se
                        </Link>
                    </p>
                </form>
                <div className="fundoLogin hidden lg:block"></div>
            </div>
        </>
    );
}

export default Login;