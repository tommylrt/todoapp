// c'est la ou je trouve toute mes routes

// j'importe express pour utiliser le router
const express = require("express");
const router = express.Router();

const indexController = require("../controllers/index");
const editController = require("../controllers/edit");

router.get("/", indexController.getIndex);

router.post("/ajouter", indexController.postIndex);

router.delete("/supprimer/:id", indexController.deleteIndex); // : veut dire que c'est dynamique, :id ici est donc un id dynamique

router.get("/editer/:id", editController.getEdit);

router.put("/editer/:id", editController.putEdit);

module.exports = router;
