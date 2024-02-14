import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Postagem from '../../../models/Postagem';
import Tema from '../../../models/Tema';
import { buscar, atualizar, cadastrar } from '../../../services/Service';


function FormularioPostagem() {
    let navigate = useNavigate(); //useNavigate = Redireciona o usuário de uma página para outra sem recarregar a página, neste caso, foi atribuída à uma variavel

    //useParams = Mapear URLs e extrair parâmetros específicos
    const { id } = useParams<{ id: string }>(); //Nesse caso, o HOOK vai acessar a URL e tentar capturar o parametro 'id'. Caso ele exista, seu valor será armazenado na variavel { id }

    const { usuario, handleLogout } = useContext(AuthContext); //importando contexto para ter acesso as informações/funções do Usuario
    const token = usuario.token; //armazenando Token do usuario

    const [temas, setTemas] = useState<Tema[]>([]); //<Tema[]>([]) = Array vazio de objetos Tema para que a variavel de estado possa armazenar inúmeros Temas contendo as propriedades (id, descricao e etc)

    //useState = inicializando variavel de estado para guardar a informação relevantes de estado do Tema. 
    //OBS: Esse Tema será relacionado com a Postagem
    const [tema, setTema] = useState<Tema>({ //Dessa forma o React pode verificar o estado dessa variavel a fim de verificar se houve alterações e renderiza as novas informações
        id: 0,
        descricao: '',
    });

    //useState = inicializando variavel de estado para guardar a informação relevantes de estado do Postagem.
    const [postagem, setPostagem] = useState<Postagem>({ //Dessa forma o React pode verificar o estado dessa variavel a fim de verificar se houve alterações e renderiza novas informações
        id: 0,
        titulo: '',
        texto: '',
        data: '',
        tema: null,
        usuario: null,
    });

    async function buscarPostagemPorId(id: string) { //assync function pois essa função pode demorar para retornar uma resposta
        //Utilizando a função buscar vindo da service com os parametros (url: string, setPostagem: Function, header: Object exigidos na Service | await = espera o backend retornar uma resposta
        await buscar(`/postagens/${id}`, setPostagem, { //Essa função vai acessar a rota e tentar buscar uma Postagem com base no parametro 'id'. Caso consiga encontrar, será armazenado na variavel 'postagem' através da função setPostagem
            //postagens/${id} = concatenação para criar uma String(que será utilizada como URL) utilizando o valor presente na variavel 'id' como parametro para encontrar uma Postagem. Por ex: Se a variavel 'id' for = a 55, a URl será convertida para /postagens/55
            headers: {
                Authorization: token,
            },
        });
    }

    /*
        ROTAS DE REQUISIÇÃO: São as rotas especificadas no backend para executar algum método, como:usuarios/logar.
        São utilizadas para enviar requisições do Front para o Back

        ROTAS DE NAVEGAÇÃO: São as rotas utilizadas para navegação entre páginas durante o uso da aplicação.
        Ao acessar um componente específico, essa rota é exibida no campo URL
    */
    async function buscarTemaPorId(id: string) {
        await buscar(`/temas/${id}`, setTema, {
            headers: {
                Authorization: token,
            },
        });
    }

    async function buscarTemas() { 
        await buscar('/temas', setTemas, { 
            headers: {
                Authorization: token,
            },
        });
    }

    useEffect(() => { //useEffect = executa uma função sempre que sua variavel de dependencia sofrer alteração
        buscarTemas(); //busca todos os temas presente no backend
        if (id !== undefined) { //Verifica se o parametro da URL (id) é diferente de indefinido para executar a função buscarPorId e buscar uma Postagem presente no backend. Pois toda postagem cadastrada possui um id específico, logo não é possível existir com id indefinido
            buscarPostagemPorId(id); //Caso o id for diferente de indefinido, será executada a função para buscar a Postagem pelo id
            console.log(tema);
        }
    }, [id]); //variavel de dependencia

    useEffect(() => { 
        if (token === '') { //Verifica se o Token está vazio (Pois o usuário não pode ficar na aplicação caso não possua Token e caso ele esteja vazio, significa que o Usuario não logou)
            alert('Você precisa estar logado');
            navigate('/'); //Se sim, redireciona o usuário para tela de Login
        }
    }, [token]);

    useEffect(() => {
        setPostagem({ //Atualizando Postagem
            ...postagem, //'separando' as propriedades do objeto Postagem para serem preenchidas/atualixadas
            tema: tema, //preenchendo a PROPRIEDADE 'Tema' com o VALOR presenta na variavel 'Tema' selecionado no momento de cadastrar a Postagem
            /*
                propriedade     valor
                tema:           tema
            */
        });
    }, [tema]); //Nesse caso, sempre que um Tema for selecionado é considerado um efeito colateral para que o useState capte a mudança. Dessa forma, assim que o Tema for selecionado, essa função irá associar com uma postagem

    //e: ChangeEvent<HTMLInputElement> = Evento de mudança do elemento input, por ex: toda vez que algo é digitado em um formulário, pode ser considerada uma mudança de estado do elemento input | É uma forma de acessar um elemento input a partir de um evento
    //Tem como objetivo capturar o que está sendo digitado pelo Usuário e armazenar na variavel de estado 'Postagem' através da função setPostagem
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setPostagem({ //Atualizando Postagem
            ...postagem, //'separando' as propriedades do objeto Postagem para serem preenchidas
            [e.target.name] //nome do input que está chamando essa função
            : e.target.value, //valor que foi digitado no input que disparou a função
            tema: tema, //preenchendo a propriedade tema que será associado à postagem
            usuario: usuario, //preenchendo a propriedade usuario que está logado no momento de publicar a postagem
        });
    }

    function retornar() {
        navigate('/postagens'); //Rota de navegação
    }

    //ChangeEvent<HTMLFormElement = Mudança de evento de formulário
    async function gerarNovaPostagem(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault(); //evita que a página recarregue ao enviar um formulário para evitar que os dados sejam enviados pela URL

        console.log({ postagem });

        //Como o formulário é o mesmo para cadastrar e atualizar uma Postagem, é necessário definir uma lógica para definir qual método será realizado.
        //Por ex: Se o ID !== (diferente) de indefinido, significa que a Postagem foi cadastrada (pois o id é gerado automaticamente, logo não é possível existir uma Postagem sem ID definido)
        //O método será ATUALIZAR pois já existe uma Postagem
        if (id != undefined) {
            try {
                await atualizar(`/postagens`, postagem, setPostagem, { //Acessa a URL informada e tenta atualizar uma Postagem específica com base em seu Id. Informando um objeto 'Postagem'. Caso consiga atualizar, seu estado será armazenado na variavel 'postagem' através da função setPostagem
                    headers: {
                        Authorization: token,
                    },
                });
                alert('Postagem atualizada com sucesso');
                retornar();
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    alert('O token expirou, favor logar novamente')
                    handleLogout()
                } else {
                    alert('Erro ao atualizar a Postagem');
                }
            }
        } else { //Caso o ID == indefinido, ou seja, se o Postagem não foi cadastrada (pois o ID é gerado automaticamente) será realizada a função de CADASTRAR Postagem, pois ela ainda não existe
            try {
                await cadastrar(`/postagens`, postagem, setPostagem, {
                    headers: {
                        Authorization: token,
                    },
                });

                alert('Postagem cadastrada com sucesso');
                retornar();
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    alert('O token expirou, favor logar novamente')
                    handleLogout()
                } else {
                    alert('Erro ao cadastrar a Postagem');
                }
            }
        }
    }

    const carregandoTema = tema.descricao === ''; //Constante indica que o tema está sendo carregado com base na descrição do Tema. Essa função será util para 'esconder' o botão de cadastro caso o Tema ainda esteja sendo carregado

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">{id !== undefined ? 'Editar Postagem' : 'Cadastrar Postagem'}</h1>

            <form onSubmit={gerarNovaPostagem} className="flex flex-col w-1/2 gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Titulo da postagem</label>
                    <input
                        value={postagem.titulo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} //Evento de mudança que dispara a função atualizarEstado
                        type="text"
                        placeholder="Titulo"
                        name="titulo"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Texto da postagem</label>
                    <input
                        value={postagem.texto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} //Evento de mudança que dispara a função atualizarEstado
                        type="text"
                        placeholder="Texto"
                        name="texto"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Tema da postagem</p>
                    <select name="tema" id="tema" className='border p-2 border-slate-800 rounded' onChange={(e) => buscarTemaPorId(e.currentTarget.value)}> {/* Evento de mudança que dispara a função buscarTemaPorId*/}
                        <option value="" selected disabled>Selecione um tema</option>
                        {temas.map((tema) => ( //{temas.map((tema) = Acessa o array de tema e, para cada tema existente no array, é renderizado um Card com suas informações
                            <>
                                <option value={tema.id} >{tema.descricao}</option>
                            </>
                        ))}
                    </select>
                </div>
                <button disabled={carregandoTema} type='submit' className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2'>
                    {carregandoTema ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Cadastrar'}
                    {/* Renderização condicional:

                        se (carregandoTema = verdadeiro) { //Verifica se o tema está sendo carregado através da constante carregandoTema para que o Usuario não possa cadastrar uma Postagem sem Tema.
                            exibe o botão "Cadastrar" //Para não liberar o cadastro de uma Postagem sem um Tema
                        }
                        senao {
                            se (id !== undefined) { //Verifica se o id é diferente de indefinido
                                exibe a mensagem 'Editar' (pois já existe uma Postagem)
                            }
                            senao {
                                exibe a mensagem 'Cadastrar' (pois não existe a Postagem)
                            }
                        }
                    */}
                </button>
            </form>
        </div>
    );
}

export default FormularioPostagem;