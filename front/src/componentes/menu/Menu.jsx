import { Link } from "react-router-dom";
import './Menu.css'



const Menu = () =>{
  return (
    <nav className="menu">
      <ul>
        <li> <Link to ="/" > Inicio</Link> </li>
        <li> <Link to ="/profesores" > Gestión de profesores </Link> </li>
        <li><Link to='/api'> Dragon Ball</Link></li>
      </ul>

    </nav>
  )
}

export default Menu;