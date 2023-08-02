import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Tema from '../../../models/Tema';
import { buscar } from '../../../services/Service';
import CardTemas from '../cardTemas/CardTemas';

function ListaTemas() {
    //useState = inicializando variavel de estado para guardar a informação relevantes de estado do Tema. Dessa forma o React pode verificar o estado dessa variavel a fim de verificar se houve alterações e atualiza as informações de acordo 
    const [temas, setTemas] = useState<Tema[]>([]); //<Tema[]>([]) = Array vazio de objetos Tema para que a variavel de estado possa armazenar inúmeros Temas contendo as propriedades (id, descricao e etc)

    let navigate = useNavigate(); //useNavigate = Redireciona o usuário de uma página para outra sem recarregar, neste caso, foi atribuída à uma variavel

    const { usuario, handleLogout } = useContext(AuthContext); //Importando usuario e handleLogout do Contexto para acessar a propriedade de Token do Usuario e verificar se está autenticado
    const token = usuario.token; //armazenando o token do usuario

    async function buscarTemas() { //assync function pois essa função pode demorar para retornar uma resposta
        try {
            //Utilizando a função buscar vindo da service com os parametros (url: string, setDados: Function, header: Object) exigidos na Service | await = espera o backend retornar uma resposta
            await buscar('/temas', setTemas, { //Essa função vai acessar a rota e tentar buscar todos os Temas cadastrados e armazenar na variavel de estado 'temas' através da função setTemas
                headers: { Authorization: token }, //Como esse método exige um Token de autorização, esse parametro é enviado através da constante 'token' (linha 16) acessado através do usuario
            });
        } catch (error: any) { //Caso ocorra algum erro
            if (error.toString().includes('403')) { //verifica se o erro é igual a 403 (Relacionado a autenticação do Token, pois um usuário não pode estar na aplicação sem Token)
                alert('O token expirou, favor logar novamente') //Se sim, exibe o alerta na tela
                handleLogout() //Desloga o usuário da aplicação, pois a aplicação não conseguiu autenticar o token
            }
        }
    }

    useEffect(() => { //useEffect = executa uma função sempre que sua variavel de dependencia sofrer alteração
        if (token === '') { //Verifica se o Token está vazio (Pois o usuário não pode ficar na aplicação caso não possua Token e caso ele esteja vazio, significa que o Usuario não logou)
            alert('Você precisa estar logado'); //Se sim, exibe um alerta na tela
            navigate('/login'); //Redireciona o usuário para tela de Login
        }
    }, [token]); //Variavel de dependencia será o Token

    useEffect(() => {
        buscarTemas(); //Caso o tamanho do Array sofrer alguma alteração (ou seja, algum tema for adicionado/removido) essa função será executada e os temas cadastrados serão listados
    }, [temas.length]); //Variavel de dependecia será o tamanho do Array (como a variavel tema foi inicializada como um Array vazio, sempre que algum Tema for adicionado o tamanho do Array será alterado)

    return (
        <>
            {temas.length === 0 && ( //Renderização condicional = Caso o array 'tema' for = 0 (vazio) será exibido uma tela de loading (pois pode ser que ainda está buscando do backend).
            //Caso esteja diferente de vazio, será renderizado os cards correspondentes ao tema
                <Dna
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {temas.map((tema) => ( //{temas.map((tema) = Acessa o array de tema e, para cada tema existente no array, é renderizado um Card com suas informações relevantes
                            <> 
                                <CardTemas key={tema.id} tema={tema} /> 
                            </> //É declarado um fragmento pois pode possuir mais de um tema dentro do array. Dessa forma o fragmento pode renderizar todos os temas disponíveis
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaTemas;