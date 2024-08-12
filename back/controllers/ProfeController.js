//import  {unlink} from 'node:fs'
const unlink=require('node:fs').unlink
const path=require('path')
const mongoose = require('mongoose');
const Profe = require('../models/Profes');

// Obtener todos los profesores
exports.getProfes = async (req, res) => {
  try {
    const profes = await Profe.find();
    //console.log(profes)
    res.json(profes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener un profesor por ID
exports.getProfeById = async (req, res) => {
  try {
    const profe = await Profe.findById(req.params.id);
    if (profe) {
      res.json(profe);
    } else {
      res.status(404).json({ message: 'Profesor no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Crear un nuevo profesor
exports.createProfe = async (req, res) => {
  const {nombre, email, phone }=req.body
  const imagen=req.file ? req.file.filename : null
  const profe=new Profe(
    {
      nombre:nombre,
      email:email,
      phone:phone,
      imagen:imagen
    })
  try {
    const nuevoProfe = await profe.save();
    res.status(201).json(nuevoProfe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Actualizar un profesor por ID
exports.updateProfe = async (req, res) => {
  try {
    const profe = await Profe.findById(req.params.id);
    const imagen=req.file ? req.file.filename : profe.imagen
    if (profe) {
      profe.nombre = req.body.nombre || profe.nombre;
      profe.email = req.body.email || profe.email;
      profe.phone = req.body.phone || profe.phone;
      const lpath=profe.imagen
      const pathimg=req.file ? path.join(__dirname,'../uploads/'+lpath) : null
      profe.imagen=imagen
      
      if(pathimg){
        unlink(pathimg,(err)=>{
          if(err) throw err
        })
      }
      const profeActualizado = await profe.save();
      res.json(profeActualizado);
    } else {
      res.status(404).json({ message: 'Profesor no encontrado' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Eliminar un profesor por ID
exports.deleteProfe = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'ID no válido' });
  }

  try {
    const profe = await Profe.findById(req.params.id);
    if (profe) {
      const pathimg=path.join(__dirname,'../uploads/'+profe.imagen)
      unlink(pathimg,(err)=>{
        if(err) throw err
      })
      await profe.deleteOne();
      res.json({ message: 'Profesor eliminado' });
    } 
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}