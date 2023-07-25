import { useEffect, useState } from "react"

function Task() {
    const[completada, setCompletada] = useState(false) //constante estado boolean
    const [tarefa, setTarefa] = useState('') //constante estado string

    /*
        useEffect = permite executar funções sempre que uma de suas variáveis de dependência sofrer uma alteração
        
        sintaxe:
            useEffect(função, array)

            () => {} = arrow function
            [] = array
        
        De forma simples, o useEffect vai verificar se a variavel de dependencia determinada no array (no nosso exemplo, a variavel completada) sofreu uma alteração em seu valor
        caso sim, ele irá disparar a função
    */
    useEffect(() => {
        if(completada == true){ //Verifica se a variavel de dependencia sofreu uma alteração (no caso, se tornou true) 
            setTarefa("Parabéns! Você concluiu a tarefa!") //Caso sim, utiliza a função setTarefa (função da constante de estado responsável por atualizar a variavel tarefa) para modificar o valor de tarefa
        } 
    }, [completada]) //determinando variavel de dependencia que será avaliada caso haja uma alteração

    function completaTarefa(){
        setCompletada(true); //função para modificar o valor da variavel de estado completada
    }

    return (
    <div>
        <h1>Tarefa</h1>
        <h3>{ tarefa }</h3>
        <p>Conclua a Tarefa</p>
        <button onClick={completaTarefa}>Concluir a Tarefa</button>
    </div>
    ) //<h3>{ tarefa } </h3> = Utilizando o valor da variavel tarefa (string) para retornar uma mensagem caso as verificações forem verdadeiras
}

export default Task