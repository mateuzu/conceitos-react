import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import Cadastro from './paginas/cadastro/Cadastro';
import { AuthProvider } from './contexts/AuthContext';
import ListaTemas from './components/temas/listaTemas/ListaTemas';
import FormularioTema from './components/temas/formularioTema/FormularioTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaPostagens from './components/postagens/listaPostagens/ListaPostagens';
import FormularioPostagem from './components/postagens/formularioPostagem/FormularioPostagem';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} /> {/* Parametro id informado na URL para editar uma postagem específica*/}
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} /> {/* Parametro id informado na URL para deletar uma postagem específica*/}
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;

/*
  ROTAS DE REQUISIÇÃO: São as rotas especificadas no backend para executar algum método, como:usuarios/logar.
  São utilizadas para enviar requisições do Front para o Back (Rota utilizada no arquivo Service)

  ROTAS DE NAVEGAÇÃO: São as rotas utilizadas para navegação entre páginas durante o uso da aplicação.
  Ao acessar um componente específico, essa rota é exibida no campo URL (Rota utilizada no arquivo App)
*/