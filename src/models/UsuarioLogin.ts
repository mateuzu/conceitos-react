export default interface UsuarioLogin {
    id: number;
    nome: string;
    usuario: string;
    foto: string;
    senha: string;
    token: string;
}

/*
    Definindo padrão de tipagem para o objeto UsuarioLogin.
    Dessa forma, ao relacionar o objeto com outras classes, será necessário informar atributos com o mesmo tipo determinados em sua interface
*/