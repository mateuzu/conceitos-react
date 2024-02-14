import Postagem from "./Postagem";

export default interface Usuario {
    id: number;
    nome: string;
    usuario: string;
    foto: string;
    senha: string;
    postagem?: Postagem | null; // Indica que o objeto Usuario pode ser inicializado ou não, ou seja, é uma propriedade/atributo opcional. Caso seja inicializado seu tipo pode ser Postagem ou Null
}

/*
    postagem?: Postagem | null; = Nesse caso, como um Usuario pode ou não ter uma postagem, este atributo é opcional e sua tipagem é dupla
*/