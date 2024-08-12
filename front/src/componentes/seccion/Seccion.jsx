import './Seccion.css';
import imgescuela from '../../assets/img/escuela.jpg'
//import Boton from '../boton/Boton'

function Seccion() {
  return(
  <section className="seccion"> 
  <h2> Profesores de la escuela</h2>
  <p> Directorio de profesores de Mi Escuelita</p>
  <img src={imgescuela} alt="Escuelita para niños" />
  
  </section>
  )
}

export default Seccion;