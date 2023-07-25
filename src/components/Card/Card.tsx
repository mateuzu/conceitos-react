import './Card.css'

/*
    titulo: string
    descrcao: string
*/

/*
    Define o tipo e as info que o card deve receber (Props)

    A interface em React define o tipo dos parametros que o componente deve receber
    Funciona como se estivesse definindo um padrão que o componente (função) deve seguir.
    Em seguida, definimos que o component Card recebe como parâmetro um objeto do tipo CardProps (que possui titulo/descricao como string) para acessar os valores das propriedades
    Neste exemplo, CardProps define que o componente Card DEVE receber um título/descricao dos tipos string

    Componentes (funções) podem receber parametros normalmente (como ex: function soma(x:number, y:numver)) - Porém por boas práticas, a utilização de uma Interface torna o código mais organizado
    Dessa forma, caso surja algum parametro adicional futuramente, basta adicioná-lo na interface que o componente irá seguir

    Com isso, podemos reutilizar o componente informando propriedades (titulo/descricao) diferentes
*/

interface CardProps{
    titulo: string;
    descricao: string;
}

function Card(props: CardProps) {
    return (
        <>
        <div className='card'>
            <h1>{props.titulo}</h1> 
            <p>{props.descricao}</p>
        </div>
        </>
    );
    // <h1>{props.titulo}</h1> = Utilizando o parametro props para acessar as propriedades titulo e descricao
}

export default Card