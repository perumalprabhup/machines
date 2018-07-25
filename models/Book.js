var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  id: Number,
  name: String,
  spec: String,
  spares: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Book', BookSchema);
