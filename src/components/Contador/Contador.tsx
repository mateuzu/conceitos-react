import { useState } from "react"

function Contador() {
    /*
        OBS: TODA LÓGICA DEVE SER REAIZADA ANTES DO RETURN
        estrutura HOOK useState que permite trabalhar com estado dos componentes

        sintaxe: 
        const[variavel, setVariavel] = useState(x)
            variavel = variavel que armazena o estado atual do componente
            setVariavel = função que permite atualizar o valor da variavel
            useState() = determina que a constante irá armazenar um estado | entre () define o valor de inicialização da variavel de estado

        OBS: Vale ressaltar que a variavel possui tipagem dinâmica, ou seja, seu tipo depende do valor inicial definido no useState()
        no exemplo, useState(0) = indica que a variavel será numérica | useState("Hi") = indica que a variavel será string | useState(false) = indica que a variavel será boolean e etc
    */
    const [valor, setValor] = useState(0);

    function somarMaisUm() {
        setValor(valor + 1); //utilizando a função responsável por atualizar o valor da constante de estado, nesse caso: setValor
        //por padrão, deve utilizar a função responsável por atualizar a variavel de estado para modificar seu valor
    }

    return (
        <div>
            <p>O valor do estado é: {valor} </p>
            <button onClick={ somarMaisUm }> Adicionar + 1</button>
        </div>
    )
}

export default Contador