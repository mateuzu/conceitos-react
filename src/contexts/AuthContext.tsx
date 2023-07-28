import { createContext, ReactNode, useState } from "react"

import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service"
// import { toastAlerta } from "../utils/toastAlerta"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void //handle = Ações que a pessoa usuario na aplicação que possam chamar uma função | Trabalha com a lógica de Loggoff
    handleLogin(usuario: UsuarioLogin): Promise<void> //Pega os dados digitados pelo usuario da aplicação e tenta logar | Trabalhar com a lógica de login
    isLoading: boolean //Verifica se a página está carregando para realizar alguma função, como logar, cadastrar e login
}


interface AuthProviderProps {
    children: ReactNode
}

//criando o contexto | centralizando informações para os demais componentes. Neste caso, será compartilhada os dados definidos na interface AuthContextProps
export const AuthContext = createContext({} as AuthContextProps) //A palavra reservada 'as' garante que os dados serão iguais ao Objeto mencionado, no exemplo, garante que o contexto será criado com os dados da interface AuthContextProps


export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({ //Constante cria o estado do tipo UsuarioLogin para guardar e compartilhar com os demais componentes assim que o usuario logar na aplicação
        id: 0, 
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false) //Constante verifica se a página está sendo carregada com base em seu estado

    async function handleLogin(userLogin: UsuarioLogin) { //Função assincrona pois pode demorar para retornar uma resposta vindo do Backend (através da Service) tipada como UsuarioLogin
        setIsLoading(true) // assim que a função estiver sendo executada, a variavel de estado isLoading será = a true, ou seja, que a página está carregando
        try {
            //Utilizando a função login vindo da service com os parametros (url: string, dados: Object, setDados: Function) exigidos na Service | await = espera o backend retornar uma resposta
            await login(`/usuarios/logar`, userLogin, setUsuario) //Essa função vai acessar a rota indicada e tentar realizar o login. Quando o backend retornar os dados (resposta) a função setUsuario vai gravar os dados para que outros componentes possam utilizar a informação
            alert("Usuário logado com sucesso")
            setIsLoading(false) //Caso o usuario consiga logar, a página não está carregando. Dessa forma, isLoading = false

        } catch (error) {
            console.log(error) //Caso dê erro, envia uma mensagem de erro ao console pelo Devtools
            alert("Dados do usuário inconsistentes") //Caso dê erro, será exibido uma pop-up com a mensagem definida
            setIsLoading(false)
        }
    }

    function handleLogout() { //função para deslogar o usuário | essa função não precisa ser assincrona pois não precisa de um retorno do backend
        setUsuario({ //utiliza o método setUsuario para "resetar/zerar" as informações do usuário logado. Dessa forma, outro usuário poderá fazer login
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}> 
            {children}
        </AuthContext.Provider>
    ) //<AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}> = disponibilizando os dados/funções/estados para que os demais componentes possam acessar as informações
}