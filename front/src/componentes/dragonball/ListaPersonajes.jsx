import { useState, useEffect } from "react";
import { fetchPersonajes } from "./api";
import './dragonball.css'

function ListaPersonajes(){
    const [data, setData]=useState([])
    const [vinc,setVinc]=useState('')
    const [loading,setLoading] =useState(true)
    const [personajes,setPersonajes]=useState([])
    const btnAnterior=document.getElementById('btnAnterior')
    const btnSiguiente=document.getElementById('btnSiguiente')
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const datap = await fetchPersonajes(vinc)
                setPersonajes(datap.items)
                setData(datap)
                setLoading(false)
            }
            catch(err){
                console.error(err)
                setLoading(false)
            }
        }
        fetchData()
    },[vinc])
    const siguiente=()=>{
        btnAnterior.disabled=false
        if(data.links.next){
            setVinc(data.links.next)
        }else{
            btnSiguiente.disabled=true
            alert('Es la última página')
        }
        
    }
    const anterior=()=>{
        
        btnSiguiente.disabled=false
        if(data.links.previous){
            setVinc(data.links.previous)
        }else{            
            btnAnterior.disabled=true
            alert('Es la primera página')
        }
    }
    const primera=()=>{
        setVinc(data.links.first)
        btnAnterior.disabled=true
        btnSiguiente.disabled=false
    }
    const ultima=()=>{
        setVinc(data.links.last)
        btnSiguiente.disabled=true
        btnAnterior.disabled=false
    }
    return(
        <div>
            <h2>Lista Personajes</h2>
            {
                loading ? (<p>Cargando Personajes</p>) :
                (<ul className="personajes-lista">
                    {
                        personajes.map(pers=>(
                            <li key={pers.id}>
                                <p><b>Nombre: </b> {pers.name}</p>
                                <p><b>Raza: </b>{pers.race}</p>
                                <p><b>ki:</b>{pers.ki}</p>
                                <p><b>Género: </b>{pers.gender}</p>
                                <p><b>Descripción: </b>{pers.description}</p>                
                                <img src={pers.image} />
                            </li>
                        ))                        
                    }
                </ul>)
            }
            <button onClick={primera} id="btnPrimero">Primera página</button>
            <button onClick={anterior} id="btnAnterior">Anterior</button>
            <button onClick={siguiente} id="btnSiguiente">Siguiente</button>
            <button onClick={ultima} id="btnUltimo">Última página</button>
        </div>
    )
}
export default ListaPersonajes