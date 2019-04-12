// j'appel express
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

mongoose
  .connect(
    "mongodb+srv://admin:admin123@todoappyoutube-rl2xr.mongodb.net/test?retryWrites=true"
  )
  .then(() => {
    console.log("Connecté à la base de donnée");
  });

// je lance express
const app = express();

// bodyparser permet de recuperer le formulaire quand on a des données de type Post
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method")); // permet d'utiliser autre que get ou post en html

//pug est integré par express donc pas besoin de le require: on le configure pug juste
app.set("view engine", "pug");

//il faut dire que l'on souhaite utiliser le router quand on est a la racine
const indexRoutes = require("./routes/index");
app.use("/", indexRoutes);

// je config le port
const port = 8080 || process.env.PORT; //pour le pour en ligne
// je lance le port et j'affiche que cela fonctionne par une callback
app.listen(port, () => console.log(`Serveur lancé sur le port ${port}.`));
