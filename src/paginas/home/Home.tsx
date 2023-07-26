import homeLogo from '../../assets/home.png'
import './Home.css';

function Home() {
    return (
        <>
            <div className="bg-indigo-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
                        <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>

                        <div className="flex justify-around gap-4">

                            <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img src={homeLogo} alt="" className='w-2/3' />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;

/*
    Bibliotecas de roteamento em desenvolvimento front-end
    Bibliotecas de roteamento em desenvolvimento front-end são conjuntos de ferramentas e funções que permitem que um aplicativo de front-end gerencie as rotas do navegador de forma eficiente e confiável.
    Essas bibliotecas geralmente são usadas em aplicativos de página única (SPA), que usam JavaScript para renderizar o conteúdo no navegador.
    Basicamente, é uma forma de gerenciar quais páginas serão exibidas ao usuário

    REACT ROUTER DOM
    React Router DOM é uma biblioteca de roteamento para aplicativos React.
    Ele permite que você gerencie a navegação de uma página para outra sem atualizar a página inteira. A versão mais recente do React Router DOM é a versão 6.

    OBS:
    Como o React utiliza o conceito de SPA, ou seja, o conteúdo é renderizado dinamicamente, NÃO é recomendado utilizar a TAG <a> para realizar a navegação entre páginas, pois ao utilizar essa TAG, todo o conteúdo é renderizado novamente

    Para navegar de uma página para outra em React sem que todo o conteúdo seja renderizado novamente, utilize a TAG <Link to = 'caminho'> Exemplo </Link>
    Com a TAG <Link>, somente o conteúdo adicional/diferente será renderizado em tela, ao invés do conteúdo inteiro
    
    No exemplo:
    <Link to='/login' className='hover:underline mx-4'>Login por Link</Link> - Uma forma de navegar entre páginas utilizando padrão SPA para que somente o contéudo adicional seja renderizado
*/