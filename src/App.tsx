import './App.css'
import Home from './paginas/home/Home'

function App(){
  return (
    <>
      {/* <Card titulo='Props' descricao='Objeto que contêm informações que são passados de um Componente Pai para um Componente filho'/> reutilizando o componente Card e informando propriedades diferente para cada Card*/}
      {/* <Card titulo='Interface' descricao='Define o tipo e as informações que o component deve receber (Props)'/> */}
      <Home/>
    </>
  ); 
}

export default App;