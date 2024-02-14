function Flexbox() {
    return (
        <>
            <div>
                <h3 className='text-xl'>justify-content alinhamento horizontal</h3>
                <h5>justify-start Esquerda</h5>
                <div className="flex flex-row  justify-start m-3">
                    <div className='basis-1/4 bg-red-500'>01</div>
                    <div className='basis-1/4 bg-gray-400'>01</div>
                </div>
                <h5>justify-end Direita</h5>
                <div className="flex flex-row  justify-end m-3">
                    <div className='basis-1/4 bg-red-500'>01</div>
                    <div className='basis-1/4 bg-gray-400'>01</div>
                </div>
                <h5>justify-center Centro</h5>
                <div className="flex flex-row  justify-center m-3">
                    <div className='basis-1/4 bg-red-500'>01</div>
                    <div className='basis-1/4 bg-gray-400'>01</div>
                </div>
                <h5>justify-around estremidades</h5>
                <div className="flex flex-row  justify-between m-3">
                    <div className='basis-1/4 bg-red-500'>01</div>
                    <div className='basis-1/4 bg-gray-400'>01</div>
                </div>
                <h5>justify-around estremidades com espaçamento</h5>
                <div className="flex flex-row  justify-around m-3">
                    <div className='basis-1/4 bg-red-500'>01</div>
                    <div className='basis-1/4 bg-gray-400'>01</div>
                </div>

            </div>

            <div className='mt-12'>
                <h3 className='text-xl'>justify-content alinhamento vertical</h3>
                <div className='w-auto h-60 bg-gray-400 flex  justify-center items-start m-3'>
                    <div className='basis-1/4 bg-red-500'>justify-center items-start alinhamento horizontal centro/vertical topo</div>
                </div>
                <div className='w-auto h-60 bg-gray-400 flex  justify-center items-center m-3'>
                    <div className='basis-1/4 bg-red-500'>justify-center items-start alinhamento horizontal centro/vertical centro</div>
                </div>
                <div className='w-auto h-60 bg-gray-400 flex  justify-center items-end m-3'>
                    <div className='basis-1/4 bg-red-500'>justify-center items-start alinhamento horizontal centro/vertical base</div>
                </div>
            </div>
        </>
    );
}

export default Flexbox;

/* 
    Cria um modelo de layout com os elementos seguindo numa mesma direção (coluna - um embaixo do outro, linha - um ao lado do outro)
    Geralmente esse layout é utilizado para elementos pequenos, como os botões de curtir, comentar e compartilhar de uma postagem no Facebook

    O display: flex é amplamente utilizado para criar layouts responsivos e flexíveis
    Onde os elementos se adaptam ao tamanho do contêiner e à tela do dispositivo, facilitando a construção de interfaces de usuário modernas e dinâmicas.

    No exemplo:
    <div className="flex flex-row  justify-start m-3"> - Utilizando classes com configurações pré-defininidas disponibilizadas pelo Tailwind
    Repare que a utilização é semelhante ao CSS Inline - Onde as propriedades são estilizadas dentro da própria TAG
*/