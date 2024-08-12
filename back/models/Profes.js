const mongoose = require('mongoose');

const ProfeSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  imagen: { type: String, required: true }
});

module.exports = mongoose.model('Profesor', ProfeSchema);
