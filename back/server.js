const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const profeRoutes = require('./routes/profeRoutes');
require('dotenv').config(); 

// Crear una instancia de la aplicación Express
const app = express();

// Middleware
app.use(cors()); // Permite solicitudes desde diferentes orígenes
app.use(express.json()); 

// Rutas
app.use('/profesores/uploads',express.static('./uploads'))
app.use('/profesores', profeRoutes);


// Conexión a la base de datos
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
