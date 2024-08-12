import React, { useEffect, useState } from 'react';
import './profesores.css'
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';
import UnProfe from './unProfe';

const ListaProfesores = () => {
  const [Profesores, setProfesores] = useState([]);
  const navigate=useNavigate()
  const ruta='http://localhost:5000/profesores/upload/'

  useEffect(() => {
    const fetchProfesores = async () => {
      try {
        const response = await axios.get('http://localhost:5000/profesores');
        setProfesores(response.data);
      } catch (error) {
        console.error('Error al obtener los profesores:', error);
      }
    };

    fetchProfesores();
  }, []);
  const crear=()=>{
    navigate('/profesores/crear')
  }

  return (
    <div className='contenedor'>
      <div>
      <h1>Lista de Profesores</h1>
      <ul>
        {
          Profesores.map(pro=>(<UnProfe profe={pro} key={pro._id}/>))
        
        }
      </ul>
      </div>
      <div>
      <button onClick={crear} className="crear">Crear Profesor</button>
      </div>
    </div>
  );
};

export default ListaProfesores;