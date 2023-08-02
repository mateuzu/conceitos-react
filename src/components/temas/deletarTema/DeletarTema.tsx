import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AuthContext } from '../../../contexts/AuthContext'
import Tema from '../../../models/Tema'
import { buscar, deletar } from '../../../services/Service'

function DeletarTema() {
    //useState = inicializando variavel de estado para guardar a informação relevantes de estado do Tema. Dessa forma o React pode verificar o estado dessa variavel a fim de verificar se houve alterações e atualiza as informações de acordo
    const [tema, setTema] = useState<Tema>({} as Tema)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>() //Mapeando a URL para captar o parametro (id) especificado. Caso exista, será armazenado na variavel {id}

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, { //Essa função vai acessar a rota e tentar buscar um Tema com base no parametro 'id'. Caso consiga encontrar, será armazenado na variavel 'tema' através da função setTema
                //temas/${id} = concatenação para criar uma String utilizando o valor presente na variavel 'id' como parametro para encontrar um Tema. Por ex: Se a variavel 'id' for = a 55, a URl será convertida para /temas/55
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()
            }
        }
    }

    useEffect(() => { //useEffect = executa uma função sempre que sua variavel de dependencia sofrer alteração
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) { //Verifica se o id é diferente de indefinido para executar a função buscarPorId e buscar um Tema presente no backend. Pois todo tema cadastrado possui um id específico, logo não é possível existir um tema com id indefinido
            buscarPorId(id) //Caso o id for diferente de indefinido, será executada a função para buscar o tema
        }
    }, [id])

    function retornar() {
        navigate("/temas")
    }

    async function deletarTema() {
        try {
            await deletar(`/temas/${id}`, { //Acessa a URL informada e tenta localizar um Tema específico com base em seu Id para que consiga deletar.
                //temas/${id} = concatenação para criar uma String (URL) utilizando o valor presente na variavel 'id' como parametro para encontrar um Tema. O parametro da variavel vem da URL
                headers: {
                    'Authorization': token
                }
            })

            alert('Tema apagado com sucesso') //Caso consiga deletar, será exibido o alerta

        } catch (error) {
            alert('Erro ao apagar o Tema') //Caso dê algum erro, será exibido o alerta
        }

        retornar() //Função para retornar para rota de temas
    }
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar tema</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o tema a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Tema</header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p> {/* Faz referencia à propriedade Descricão do objeto tema*/}
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletarTema}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarTema