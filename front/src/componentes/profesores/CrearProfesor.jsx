import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CrearProfesor = () =>{
    const [nombre, setNombre]=useState('')
    const [email, setEmail]=useState('')
    const [phone, setPhone]=useState('')
    const [imagen,setImagen]=useState(null)
    const navigate=useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const formData=new FormData()
        formData.append('nombre',nombre)
        formData.append('email',email)
        formData.append('phone',phone)
        if(imagen){
          formData.append('imagen',imagen)
        }
        try{
            await axios.post('http://localhost:5000/profesores',
               formData,
               {
               headers: {
                'Content-Type': 'multipart/form-data',
              }
              })
            navigate('/profesores')
        }
        catch(err){
            console.error(err)
        }
    }
    return(
        <div className="formulario-profe">
      <h2>Editar Profesor</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="campoform">
          <label htmlFor='nombre'>Nombre: </label>
          <input
            type='text'
            id='nombre'
            value={nombre}
            onChange={(e)=>{setNombre(e.target.value)}}
            required />
        </div>
        <div className="campoform">
          <label htmlFor='email'>E-mail: </label>
          <input
            type='text'
            id='email'
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            required />
        </div>
        <div className="campoform">
          <label htmlFor='phone'>Teléfono: </label>
          <input
            type='text'
            id='phone'
            value={phone}
            onChange={(e)=>{setPhone(e.target.value)}}
            required />
        </div>
        <input
          type="file"
          id="archivoimagen"
          accept="image/*"
          onChange={(e)=>{setImagen(e.target.files[0])}}
          required />
        <input type='submit' value='Crear profesor' id="btnCrear"/>
      </form>
    </div>
    )
}
export default CrearProfesor