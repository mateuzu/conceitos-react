import axios from "axios";

const api = axios.create({ // criando o objeto de conexão/configuração axios com a URL da API
    baseURL: '' //URL DA API, COMO ESSE PROJETO É PARA ESTUDO PESSOAL, NÃO IREI COLOCAR NENHUM LINK PARA EVITAR ERROS
})

/*
    url: Caminho da API para executar o método correspondente, no caso, cadastrar um usuário

    dados: Objeto que será enviado com os dados referentes ao Usuario (id, nome, e-mail, etc)

    setDados = Guarda os dados relevantes do Objetct dados, por exemplo, ao receber uma resposta do backend, TODAS as informações do Object são repassadas em conjuto.
    Essa função é responsável por "separar" somente as informações como id, nome, e-mail do Usuário (para que possamos acessar essas propriedades posteriormente)
*/

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const login = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados) //aguarda o backend processar a requisição enviada para a URL informada com os dados (objeto) para armazenar uma resposta (response)
    setDados(resposta.data) ////Acessa a resposta vinda do backend com TODAS informações, essa linha de código separa somente as informações data do Objeto (no caso, id, nome, e-mail, senha e etc)
}

/*
    Este é um exemplo de código que utiliza a biblioteca axios para fazer uma requisição POST para um servidor em uma determinada URL.

    Primeiro, o código importa a biblioteca axios. Em seguida, a constante api é criada usando o método create da biblioteca axios, passando a baseURL como parâmetro.

    A função cadastrarUsuario é definida, que é uma função assíncrona que recebe três parâmetros: uma string contendo a URL para a requisição POST
    um objeto contendo os dados que serão enviados na requisição e uma função setDados que será utilizada para atualizar os dados após a requisição ser concluída.

    Dentro da função, a constante resposta é definida usando o método post da constante api, que é uma instância do axios criada anteriormente. 
    Este método POST envia os dados fornecidos como segundo parâmetro para a URL fornecida como primeiro parâmetro.

    O resultado da requisição é armazenado na constante resposta, que contém o objeto de resposta da requisição. Em seguida, a função setDados é chamada com o resultado da requisição, ou seja, a resposta.data.
*/