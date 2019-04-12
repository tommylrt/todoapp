// c'est la ou ce trouve ma logique req, rep..

const Todo = require("../models/Todo");

const getIndex = (req, res) => {
  // quand on met un objet vide c'est que l'on ne met pas d'option et que l'on veut trouver tout les documents
  // une fois que mongoose a tout trouver on passe une callback qui nous retourne un tableau que l'on peut passer dans la vue afin d'afficher ma liste
  Todo.find({}, (err, todos) => {
    if (err) console.log(err);
    console.log(todos); //on peut voir que todos est un tableaux d'object (les taches que j'ai ajouté à ma todo)
    res.render("index", {
      todos: todos
    });
  });
};

const postIndex = (req, res) => {
  const newTodo = new Todo({
    title: req.body.title
  });
  //  console.log(newTodo); je peux voir ici que mongoose genere automatiquement un ID pour le title que je  rentre
  newTodo.save(err => {
    //.save pour l'enregistrement en BDD
    if (err) console.log(err);
    res.redirect("/"); // quand on poste on veut creer  une nouvelle tache // on redirige a la racine pour eviter que la page mouline
  });
};

const deleteIndex = (req, res) => {
  console.log(req.params.id); //on peut voir que req.param nous donne l'id dynamique
  const { id } = req.params;
  Todo.findByIdAndDelete(id, err => {
    if (err) console.log(err);
    res.redirect("/");
  });
};

module.exports = {
  getIndex: getIndex,
  postIndex: postIndex,
  deleteIndex: deleteIndex
};
