import axios from "axios";

const api = axios.create({ // criando o objeto de conexão/configuração axios com a URL da API
    baseURL: '' //URL DA API, COMO ESSE PROJETO É PARA ESTUDO PESSOAL, NÃO IREI COLOCAR NENHUM LINK PARA EVITAR ERROS
})

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados) //aguarda o backend processar a requisição enviada para a URL informada com os dados (objeto) para receber uma resposta (response)
    setDados(resposta.data) //Acessa a resposta vinda do backend com TODAS informações, essa linha de código separa somente as informações data do Objeto (no caso, id, nome, e-mail, senha e etc)
}

//MÉTODOS CRUD TEMAS
export const buscar = async (url: string, setDados: Function, header: Object) => { //header (objetct) = Cabeçalho com o Token de autenticação para realizar requisições na aplicação
    const resposta = await api.get(url, header) //Envia uma requisição GET ao Backend para buscar todos os temas. Neste caso não precisa do parametro dados: Object pois esse método busca os Temas e não cadastra
    setDados(resposta.data)
}

export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.post(url, dados, header) //Envia uma requisição POST para a URL informada com os dados (informações) e o Token de autenticação para cadastrar um Tema. Neste caso precisa dos dados para adicioná-los ao banco de dados
    setDados(resposta.data)
}

export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}

export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header) //Envia uma requisição DELETE para a URl informada com o Token de autenticação do Usuário. Neste caso não precisa de dados retornados do Backend, pois o objeto será apagado e não persistido no banco de dados
}

/*
    A pasta "service" geralmente é usada para armazenar funções que se comunicam com uma API ou outras fontes de dados externas.
    Essas funções geralmente são usadas para obter ou atualizar dados da API e, em seguida, atualizar o estado dos componentes em conformidade.
    Essa pasta pode ser usada para separar a lógica de negócios da lógica de interface do usuário e tornar o código mais modular e fácil de manter.

    AXIOS = Axios é uma biblioteca JavaScript utilizada para realizar requisições HTTP, tanto para recuperar dados quanto para enviar dados para uma API.
    Axios também é uma ferramenta que permite personalizar status response HTTP vindos do backend (como 200, 404 e etc) em elementos personalizados, como uma tela de erro quando o status fo backend = 400
    Além disso, o Axios também valida se as informações que o FrontEnd está enviando (request) são compatíveis com as informações solicitadas pelo BackEnd, por exemplo, um cadastro de usuário precisa de um e-mail, porém o front não enviou, dessa forma o Axios não conseguirá realizar o POST (cadastro) deste Usuário, visto que o BackEnd solicitou informações adicionais para criação deste Usuário

    arrow function = Outra forma de escrevar funções nominais
    await = A função espera a API retornar um resultado (resposta) para sua requisição

    async = A função assíncrona permite lidar de forma mais conveniente com operações assíncronas, como fazer requisições a servidores, ler arquivos, acessar bancos de dados, entre outras tarefas que não são executadas de forma sequencial.
    Basicamente indica que a função pode levar algum tempo para ser concluída
*/