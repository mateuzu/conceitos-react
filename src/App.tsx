import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;

/*
  TAG BrowserRouter:
  Habilita o controle de rotas (container para os componentes da aplicação que precisam ser renderizadas com base em rotas)
  O componente BrowserRouter é importado da biblioteca React Router DOM e é usado para envolver todo o conteúdo que precisa de roteamento.
	
  TAG Routes: 
  Elemento que identifica qual foi a rota acessada pelo usuário a partir da URL do navegador e verifica se existe um componente para a rota
  O componente Routes é importado da biblioteca React Router DOM e é usado para definir as rotas do aplicativo.

  TAG Route:
  <Route path="/" = Caminho/URL raiz da página, ou seja,, o caminho da página inicial
  <Route path="/caminho" = Determinando caminho/URL para renderizar determinada página e exibir o elemento correpondente em tela
  <Route path="/" element={elemento que será acessado caso a URL for acessada} />

  OBS:
  Os elementos que estão fora do escopo do Routes sempre serão renderizados independente da rota que o usuário acessar.

  Vale ressaltar que os componentes devem ser inseridos conforme sua ordem de inserção , neste exemplo, o componente <Navbar> será exibido acima/antes, enquanto <Footer> será exibido abaixo/depois.
  Como o React lê os códigos como se fosse um livro (da esquerda pra direta, de cima pra baixo) o componente será exibido com base em sua inserção, dessa forma se o componente <Footer> for inserido antes do <Navbar>, ele será exibido em tela anteriormente
*/