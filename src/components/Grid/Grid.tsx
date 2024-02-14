function Grid() {
    return (
        <>

            <div>
                <div className='grid grid-cols-12 gap-2 m-4'>

                    <div className='col-span-6 bg-green-300'>
                        container 1
                    </div>

                    <div className='col-span-6 bg-yellow-200'>
                        container 2
                    </div>

                </div>
                <div className='grid grid-cols-12 gap-2 m-4'>

                    <div className='col-span-8 bg-green-300'>
                        container 1
                    </div>

                    <div className='col-span-4 bg-yellow-200'>
                        container 2
                    </div>

                </div>

                <div className='grid grid-cols-12 gap-2 m-4'>

                    <div className='col-span-4 bg-green-300'>
                        container 1
                    </div>

                    <div className='col-span-4 bg-yellow-200'>
                        container 2
                    </div>

                    <div className='col-span-4 bg-red-500'>
                        container 3
                    </div>

                </div>

                <div className='grid grid-cols-12 gap-2 m-4'>

                    <div className='col-span-3 bg-green-300'>
                        container 1
                    </div>

                    <div className='col-span-3 bg-yellow-200'>
                        container 2
                    </div>

                    <div className='col-span-3 bg-red-500'>
                        container 3
                    </div>

                    <div className='col-span-3 bg-blue-500'>
                        container 4
                    </div>

                </div>

                <div className='grid grid-cols-12 gap-2 m-4'>

                    <div className='col-span-4 bg-green-300'>
                        container 1
                    </div>

                    <div className='col-span-4 bg-yellow-200'>
                        container 2
                    </div>

                    <div className='col-span-2 bg-red-500'>
                        container 3
                    </div>

                    <div className='col-span-2 bg-blue-500'>
                        container 4
                    </div>

                </div>

            </div>



        </>
    );
}

export default Grid;

/*
    Modelo de layout bidimensional - os elementos podem ser alinhadados na horizontal e vertical (como se os itens fossem alinhados em forma de tabela)
    Por padrão, o display grid utiliza o padrão de 12 colunas (espaçamentos) para delimitar quantas colunas cada elemento vai utilizar
    Geralmente utilizado em layouts maiores, como por exemplo o Discord

    Com o display: grid, você pode criar layouts complexos, especificando tanto o posicionamento horizontal (colunas) quanto o vertical (linhas) dos elementos dentro do contêiner grid.
    Isso oferece um alto nível de controle e flexibilidade ao criar designs responsivos e adaptáveis a diferentes tamanhos de tela.

    No exemplo:
    <div className='grid grid-cols-12 gap-2 m-4'> - Utilizando classes com configurações pré-defininidas disponibilizadas pelo Tailwind
    Repare que a utilização é semelhante ao CSS Inline - Onde as propriedades são estilizadas dentro da própria TAG
*/