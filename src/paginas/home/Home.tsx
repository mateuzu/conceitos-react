import { useState } from 'react';
import './Home.css';
// import homeLogo from '../../assets/home.png' //importando imagem

//Definindo componente de função
function Home(){
    /*
        Definindo renderização condicional
        A renderização condicional em React é uma técnica usada para renderizar diferentes elementos ou componentes com base em determinadas condições.
        Em outras palavras, é uma maneira de controlar quais elementos são exibidos na interface do usuário com base em alguma lógica definida
        Nesse exemplo, uma tela de "Bem vindo de volta" irá aparecer caso a condição loggedIn for = true
    */
    const [loggedIn, setLoggedIn] = useState(false); //loggedIn sendo utilizada como variavel de estado para determinar se o usuário já está logado  ou não

    return (
        <>
            <div>
                {loggedIn ? ( //o operador ? é usado para criar a renderização condicional, nesse ex: se loggedIn for verdadeiro, a expressão entre () será executada
                    <h1>Bem vindo de volta!</h1>
                ) : ( //caso contrário, a expressão após : será avaliada e renderizada
                    <button onClick={() => setLoggedIn(true)}>Entrar</button>
                )}
            </div>
        </>
    );
}

export default Home;//Expoprtando para que outro componente possa importar essa função

/*
    Por boas práticas, um componente.tsx (arquivo) só pode armazenar UMA função, caso o projeto exija a criação de x componentes/funções, será necessário criar x arquivos.tsx
    Os componentes (funções) React retornam elementos HTML para que possam ser exibidos em tela

    OBS: 
    De inicio, uma função só pode retornar um elemento HTML, para resolver esse problema você pode utilizar uma TAG container (como uma div) para armazenar mais de um elemento HTML
    Outra opção é utilizar uma pseudotag <> e </> (Fragment) para armazenar mais de um elementos HTML dentro do seu escopos. Dessa forma, podemos utilizar o Fragment ao invés de utilizar inúmeras divs

    PSEUDOTAG = Simula o comportamento de uma tag para o React, porém não é exibida na renderização/exibição do elemento (incluindo DevTools)
*/