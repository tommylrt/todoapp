// c'est la page qui interagie avec la BDD

const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String, // chaine de caracteres
    required: true // on veut que ce soit requis, pas de vide
  }
});

// collection a laquelle le model est relié, mongoose rajoute automatiquement un s + le schema que l'on souhaite utiliser avec la collection
module.exports = mongoose.model("todo", todoSchema);
