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
  OBS: Repare que ambas as rotas irão renderizar o mesmo elemento 'FormularioTema'. Isso acontece pois o formulário de edição da ppstagem será o mesmo formulário de cadastro
  <Route path="/cadastroTema" element={<FormularioTema />} /> 
  <Route path="/editarTema/:id" element={<FormularioTema />} /> -- Parametro 'id' sendo passado na URL (semelhante ao Insomnia).
  Ao declarar /editarTema/:id o React considera o que está após : como uma variavel

*/