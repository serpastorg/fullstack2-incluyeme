import { useNavigate} from "react-router-dom"
import React from "react"
import axios from "axios"

export default function UnProfe({profe}){
    const navigate=useNavigate()
    const id= profe._id
    const nombre=profe.nombre
    const email=profe.email
    const phone=profe.phone
    const imagen=profe.imagen
    const vinc='/profesores/'+id
    //const rutaimg=
    const vincdel='http://localhost:5000/profesores/'+id
    const eliminar= async () => {
        try {
          await axios.delete(vincdel)
          window.location.reload(false)
        } catch (error) {
          console.error('Error al eliminar profesor:', error);
        }
      };
    const update = ()=>{
      navigate(vinc)
    }

    return(
    <li key={id}>
    <div className="detalle-Profesor">
    <div className="Profesor-info">
      <div className="NombreProfesor">
      Nombre: {nombre}</div>
      
        <div className='campo'><b>E-Mail:</b> {email}</div>
        <div className='campo'><b>Teléfono:</b> {phone}</div>
        <div className='campo'>
          
          <img className='imgProfe' src={`http://localhost:5000/profesores/uploads/${imagen}`} />
        </div>
      </div>
      <div className="acciones">
        <button onClick={update} className="actualizar">Modificar</button>
        <button onClick={eliminar} className="eliminar">Eliminar</button>
      </div>
    </div>
    </li>
    )
}
