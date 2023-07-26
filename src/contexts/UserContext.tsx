import { useState, createContext, ReactNode } from 'react';

interface UserContextType {
    nome: string;
    setNome: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<UserContextType>({
    nome: '',
    setNome: () => { }
});

interface UserProviderProps {
    children: ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
    const [nome, setNome] = useState('');

    return (
        <UserContext.Provider value={{ nome, setNome }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;

/*
    Esse código é um exemplo de como criar e exportar um contexto personalizado em React usando o hook useState e a API createContext. 
    Um contexto é usado para compartilhar dados entre componentes sem precisar passar as props manualmente.

    IMPORTS *
    O código começa com a importação de algumas dependências do React, incluindo useState, createContext e ReactNode.

    INTERFACE UserContextType *
    Em seguida, é definida a interface UserContextType que define o formato dos dados compartilhados no contexto. 
    Neste caso, é uma interface que tem uma propriedade "nome" do tipo string e "setNome" que é um React.Dispatch que recebe como argumento um React.SetStateAction que atualiza a propriedade "nome".

    EXPORT const UserContext = createContext<UserContextType> *
    Depois disso, é criado o contexto com createContext e definido um valor padrão para ele, que é um objeto vazio com uma função vazia para a propriedade setNome.
    Isso é feito para evitar erros caso o contexto seja usado antes de ser atualizado com um valor real.

    INTERFACE UserProviderProps *
    Em seguida, é definida a interface UserProviderProps que define a prop "children" do tipo ReactNode que é usada para envolver os componentes que terão acesso ao contexto.

    FUNCTION UserProvider *
    A função UserProvider é criada com os parâmetros definidos na interface UserProviderProps e usa o hook useState para definir um estado "nome" inicial como uma string vazia.
    O valor de "nome" é, então, fornecido para o contexto como um objeto com as propriedades "nome" e "setNome".

    EXPORT default UserProvider *
    Por fim, é exportado o componente UserProvider, que encapsula os componentes filhos em seu interior e, assim, permite que eles acessem o contexto através do Consumer que será chamado posteriormente em outros componentes.
    Em resumo esse componente tem como função construir um sistema de variavel global do tipo nome que pode ser utilizada e mudad em qualquer componente da aplicação.
*/