import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Postagem from '../../../models/Postagem';
import { buscar } from '../../../services/Service';
import CardPostagem from '../cardPostagem/CardPostagem';

function ListaPostagens() {

    //<Postagem[]>([]) = Array vazio de objetos Postagem para que a variavel de estado possa armazenar inúmeras Postagens contendo suas propriedades (id, titulo e texto)
    const [postagens, setPostagens] = useState<Postagem[]>([]); //Dessa forma o React pode verificar o estado dessa variavel a fim de verificar se houve alterações e renderizar as informações de acordo 

    let navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (token === '') { //Verifica se o Token está vazio (Pois o usuário não pode ficar na aplicação caso não possua Token e caso ele esteja vazio, significa que o Usuario não logou)
            alert('Você precisa estar logado');
            navigate('/'); //Direciona o Usuario para tela de Login
        }
    }, [token]);

    /*
        ROTAS DE REQUISIÇÃO: São as rotas especificadas no backend para executar algum método, como:usuarios/logar.
        São utilizadas para enviar requisições do Front para o Back

        ROTAS DE NAVEGAÇÃO: São as rotas utilizadas para navegação entre páginas durante o uso da aplicação.
        Ao acessar um componente específico, essa rota é exibida no campo URL
    */

    async function buscarPostagens() {
        try {
            await buscar('/postagens', setPostagens, { //Acessa a URL (Rota de requisição) e envia uma requisição para buscar todas Postagens presente no banco de dados. setPostagens vai 'setar' os objetos vindo do Backend na variavel 'postagens'
                headers: {
                    Authorization: token, //Token de autenticação para que o Backend possa autorizar o método
                },
            });
        } catch (error: any) { //Captura qualquer erro
            if (error.toString().includes('403')) { //Da uma tratativa de erro personalizada caso o erro capturado inclui um status relacionado ao 403 (autenticação do Token)
                alert('O token expirou, favor logar novamente') //Exibe o alerta na tela
                handleLogout() //Desloga o usuario
            }
        }
    }

    useEffect(() => { //useEffect = executa uma função sempre que sua variavel de dependencia sofrer alteração
        buscarPostagens(); //Caso o tamanho do Array sofrer alguma alteração (ou seja, alguma Postagem for adicionado/removido) essa função será executada e as postagens cadastradas serão listadas
    }, [postagens.length]); //Variavel de dependecia será o tamanho do Array (como a variavel tema foi inicializada como um Array vazio, sempre que alguma Postagem for adicionado o tamanho do Array será alterado)

    return (
        <>
            {postagens.length === 0 && ( //Renderização condicional = Caso o array 'postagens' for = 0 (vazio) será exibido uma tela de loading (pois pode ser que ainda está buscando do backend).
            //Caso esteja diferente de vazio, será renderizado os cards correspondentes a Postagens
                <Dna
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {postagens.map((postagem) => ( //{postagens.map((postagem) = Acessa o array de postagem e, para cada tema existente no array, é renderizado um Card com suas informações
                //Basicamente, ele vai iterar (percorrer) o Array e executar a função que está adiante (No nosso caso, renderizando Postagem)
                    <CardPostagem key={postagem.id} post={postagem} />
                    //Sempre que estiver listando itens, uma boa prática é utilizar a propriedade 'key' e repassar um identificar único para cada item da lista (ID).
                    //Dessa forma, o React não vai se perder ao listar os elementos, pois utilizará como chave o identificar único para cada componente
                    //key = propriedade única para o item que será renderizado
                ))} 
            </div>
        </>
    );
}

export default ListaPostagens;