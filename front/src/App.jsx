import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './componentes/footer/Footer';
import Header from './componentes/header/Header';
import Seccion from './componentes/seccion/Seccion';
import Menu from './componentes/menu/Menu';
import ListaProfesores from './componentes/profesores/ListaProfesores'
import CrearProfesor from './componentes/profesores/CrearProfesor';
import './App.css'
import EditarProfesor from './componentes/profesores/EditarProfesor';
import ListaPersonajes from './componentes/dragonball/ListaPersonajes';
/*import DetallePersonaje from './componentes/personajes/DetallePersonaje'
import ListaHechizos from './componentes/hechizos/ListaHechizos';
import DetalleHechizo from './componentes/hechizos/DetalleHechizo';
import CrearHechizo from './componentes/hechizos/CrearHechizo';
import EditarHechizo from './componentes/hechizos/EditarHechizo';
*/


function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Menu /> {/* Muestra el menú de pestañas */}
        <main>
          <Routes>
            <Route path="/" element={<Seccion />} />
            <Route path="/profesores" element={<ListaProfesores />} />
            <Route path='/profesores/:id' element={<EditarProfesor />} />
            <Route path='/profesores/crear' element={<CrearProfesor />} />
            <Route path='/api' element={<ListaPersonajes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
