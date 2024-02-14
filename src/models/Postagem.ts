import Tema from './Tema';
import Usuario from './Usuario';

export default interface Postagem {
    id: number;
    titulo: string;
    texto: string;
    data: string;
    tema: Tema | null; // Dupla tipagem: indica que o objeto TEMA pode ser inicializado como Tema ou null
    usuario: Usuario | null; //Dupla tipagem
}

/*
    Observe que as classes 'models' tem o comportamento de relacionamento semelhantes à estrutura definida no BackEnd com o Spring
*/