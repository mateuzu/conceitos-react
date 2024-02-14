import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Tema from '../../../models/Tema';
import { atualizar, buscar, cadastrar } from '../../../services/Service';

function FormularioTema() {
    //useState = inicializando variavel de estado para guardar a informação relevantes de estado do Tema. Dessa forma o React pode verificar o estado dessa variavel a fim de verificar se houve alterações e atualiza as informações de acordo 
    const [tema, setTema] = useState<Tema>({} as Tema); //A palavra reservada 'as' garante que os dados armazenados serão iguais ao Objeto mencionado

    let navigate = useNavigate(); //useNavigate = Redireciona o usuário de uma página para outra sem recarregar, neste caso, foi atribuída à uma variavel

/*
    useParams = Mapear URLs e extrair parâmetros específicos
    Basicamente, o useParams acessa a URL e captura o parametro específicado (id) presente na URL para armazenar em um componente/variavel para que seu valor possa ser utilizado posteriormente.
    É util para realizar buscas/lógicas a partir de um parâmetro específico.

    useParams<{ id: string }>(); = Forçando a tipagem do parametro 'id' como string, pois TUDO que está na URL é convertido para string, dessa forma o parametro id deve ser tipado como string para encontrá-lo
    const { id } = destructuring assignment - Sintaxe usada para extrair propriedades de objetos e atribuir seus valores à variaveis individuais
*/
    const { id } = useParams<{ id: string }>(); //Nesse caso, o HOOK vai acessar a URL e tentar capturar o parametro 'id'. Caso ele exista, seu valor será armazenado na variavel { id }

    const { usuario, handleLogout } = useContext(AuthContext); //Importando usuario e handleLogout do Contexto para acessar a propriedade de Token do Usuario e verificar se está autenticado
    const token = usuario.token; //armazenando o token do usuario

    async function buscarPorId(id: string) { //id: string = URL
        await buscar(`/temas/${id}`, setTema, { //Essa função vai acessar a rota e tentar buscar um Tema com base no parametro 'id'. Caso consiga encontrar, será armazenado na variavel 'tema' através da função setTema
            //temas/${id} = concatenação para criar uma String utilizando o valor presente na variavel 'id' como parametro para encontrar um Tema. Por ex: Se a variavel 'id' for = a 55, a URl será convertida para /temas/55
            headers: {
                Authorization: token, //Como esse método exige um Token de autorização, esse parametro é enviado através da constante 'token' (linha 23) acessado através do usuario
            },
        });
    }

    useEffect(() => { //useEffect = executa uma função sempre que sua variavel de dependencia sofrer alteração
        if (id !== undefined) { //Verifica se o id é diferente de indefinido para executar a função buscarPorId e buscar um Tema presente no backend. Pois todo tema cadastrado possui um id específico, logo não é possível existir um tema com id indefinido
            buscarPorId(id) //Caso o id for diferente de indefinido, será executada a função para buscar o tema
        }
    }, [id]) //variavel de dependencia


    //e: ChangeEvent<HTMLInputElement> = Evento de mudança do elemento input, por ex: toda vez que algo é digitado em um formulário, pode ser considerada uma mudança de estado do elemento input | É uma forma de acessar um elemento input a partir de um evento
    //Tem como objetivo capturar o que está sendo digitado pelo Usuário e armazenar na variavel de estado 'Tema'
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) { //Essa função tem como objetivo atualizar um tema. Utilizamos o parametro 'e' com o tipo ChangeEvent<HTMLInputElement> para captar as mudanças e identificar em qual input essa mudança foi realizada
        setTema({ //Atualizando tema
            ...tema,
            [e.target.name]: e.target.value
        })

        console.log(JSON.stringify(tema))
    }

    //ChangeEvent<HTMLFormElement = Mudança de evento de formulário
    async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault() //evita que a página recarregue ao enviar um formulário para evitar que os dados sejam enviados pela URL

        //Como o formulário é o mesmo para cadastrar e atualizar um tema, é necessário definir uma lógica para definir qual método será realizado.
        //Por ex: Se o ID !== (diferente) de indefinido, significa que o Tema foi cadastrado (pois o id é gerado automaticamente, logo não é possível existir um Tema sem ID definido) logo, o método será ATUALIZAR pois já existe um tema
        if (id !== undefined) { //Caso 'id' seja diferente de indefinido (ou seja, ele existe) será executado o método atualizar
            try {
                await atualizar(`/temas`, tema, setTema, { //Acessa a URL informada e tenta atualizar um Tema específico com base em seu Id. Informando um objeto 'Tema'. Caso consiga atualizar, seu estado será armazenado na variavel 'tema' através da função setTema
                    headers: {
                        'Authorization': token //Como esse método exige um Token de autorização, esse parametro é enviado através da constante 'token' (linha 16) acessado através do usuario
                    }
                })

                alert('Tema atualizado com sucesso') //Alerta exibido caso a função seja executada com sucesso
                retornar() //Função para retornar para rota de temas

            } catch (error: any) {
                if (error.toString().includes('403')) { //verifica se a mensagem de erro possui algo relacionado ao status 403 (Relacionado a autenticação do Token, pois um usuário não pode estar na aplicação sem Token autenticado)
                    alert('O token expirou, favor logar novamente') //Se sim, exibe o alerta
                    handleLogout() //Desloga o usuário da aplicação, pois a aplicação não conseguiu autenticar o token
                } else {
                    alert('Erro ao atualizar o Tema') //Caso de qualquer outro erro, será exibido outro alerta
                }

            }

        } else { //Caso o ID == indefinido, ou seja, se o Tema não foi cadastrado (pois o ID é gerado automaticamente) será realizada a função de CADASTRAR um tema, pois ele ainda não existe
            try {
                await cadastrar(`/temas`, tema, setTema, { //Acessa a URL informada e tenta cadastrar informando o tema e o token de autorização. Caso dê certo, o tema será armazenado dentro da variavel 'tema' através da função setTema
                    headers: {
                        'Authorization': token //Como esse método exige um Token de autorização, esse parametro é enviado através da constante 'token' (linha 16) acessado através do usuario
                    }
                })

                alert('Tema cadastrado com sucesso')

            } catch (error: any) {
                if (error.toString().includes('403')) { //verifica se o erro é igual a 403 (Relacionado a autenticação do Token, pois um usuário não pode estar na aplicação sem Token autenticado)
                    alert('O token expirou, favor logar novamente') //Se sim, exibe o alerta na tela
                    handleLogout() //Desloga o usuário da aplicação, pois a aplicação não conseguiu autenticar o token
                } else {
                    alert('Erro ao cadastrado o Tema') //Caso de qualquer outro erro, será exibido outro alerta
                }
            }
        }

        retornar()
    }

    function retornar() {
        navigate("/temas") //Função retornar para navegar o usuário para tela de Temas
    }

    useEffect(() => {
        if (token === '') { //Verifica se o Token está vazio (Pois o usuário não pode ficar na aplicação caso não possua Token e caso ele esteja vazio, significa que o Usuario não logou)
            alert('Você precisa estar logado'); //Se sim, exibe um alerta na tela
            navigate('/login'); //Redireciona o usuário para tela de Login
        }
    }, [token]); //Variavel de dependencia será o Token

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {/* {id === undefined ? 'Cadastre um novo tema' : 'Editar tema' } = Renderização condicional.
                    Se o id == indefinido, será exibida a mensagem 'Cadastre um novo tema' : (se não, ou seja se o Tema existe) será exibida a mensagem "Editar"*/}
                {id === undefined ? 'Cadastre um novo tema' : 'Editar tema' }
            </h1>
            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoTema}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição do tema</label>
                    <input
                        type="text"
                        placeholder="Descrição"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={tema.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} //onChange = Evento de mudança do elemento input que dispara a função atualizarEstado para guardar a informação digitada
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
                    type="submit"
                >
                    {id === undefined ? 'Cadastrar' : 'Editar'}
                </button>
            </form>
        </div>
    );
}

export default FormularioTema;