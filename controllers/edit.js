const Todo = require("../models/Todo.js");

const getEdit = (req, res) => {
  const { id } = req.params; // c'est ici du destructuring
  Todo.findById(id, (err, todo) => {
    // comme ca c'est plus lisible id a la place de req.params
    if (err) console.log(err);
    console.log(todo);
    res.render("edit", {
      todo: todo
    });
  });
};

const putEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  Todo.findByIdAndUpdate(id, { title: title }, err => {
    if (err) console.log(err);
    res.redirect("/");
  });
};

module.exports = {
  getEdit: getEdit,
  putEdit: putEdit
};
