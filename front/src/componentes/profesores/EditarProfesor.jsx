import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './profesores.css';
import axios from 'axios';

const EditarProfesor = () => {
  const { id } = useParams();
  const [nombre,setNombre]=useState('')
  const [email,setEmail]=useState('')
  const [phone, setPhone]=useState('')
  const [imagen,setImagen]=useState(null)
  const [imgorig,setImgorig]=useState('')
  const [nimagen,setNimagen]=useState('')
  const navigate = useNavigate();
  const vinc='http://localhost:5000/profesores/'+id
  useEffect(() => {
    const fetchProfesor = async () => {
      try {
        const response=await axios.get(vinc)
        const prof=response.data
        setNombre(prof.nombre)
        setEmail(prof.email)
        setPhone(prof.phone)
        const ini=prof.imagen.search('-')+1
        const inicio=prof.imagen.substring(ini)
        setNimagen(inicio)
        setImgorig(prof.imagen)
      } catch (error) {
        console.error('Error al obtener Profesor:', error);
      }
    };

    fetchProfesor();
  }, [id]);
  const handleSubmit=async (e)=>{
    e.preventDefault()
    const formData=new FormData()
    formData.append('nombre',nombre)
    formData.append('email',email)
    formData.append('phone',phone)
    if(imagen){
      formData.append('imagen',imagen)
    }
    try{
      await axios.put(vinc,
        formData,
        {
          headers:{
            'Content-Type':'multipart/form-data'
          }
        }
      )
      navigate('/profesores')
    }
    catch(err){
      console.error(err)
    }
  }

  return (
    <div className="formulario-profe">
      <h2>Editar Profesor</h2>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
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
        <div>
          <div>
          <label htmlFor="Imagen">Nombre del archivo: {nimagen}</label>
          </div>
          <img src={'http://localhost:5000/profesores/uploads/'+imgorig} className='imgProfe'/>
        </div>
        <div>
          <input
          type="file"
          id="archivoimagen"
          accept="image/*"
          onChange={(e)=>{setImagen(e.target.files[0])}}
          />
        </div>
        <input type='submit' value='Actualizar' />
      </form>
    </div>
  );
};

export default EditarProfesor
