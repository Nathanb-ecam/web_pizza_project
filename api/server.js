var express = require('express');
let app = express();
// const PORT = process.env.NODE_PORT |80
const PORT =3000;

let cors = require('cors');
// app.use(express.urlencoded())
app.use(express.json());
app.use(cors());

//import database
const sequelize = require('./db.js');
sequelize.sync()



let routes = require('./routes');
app.use('/api',routes);



app.listen(PORT,()=>{
    console.log("Serveur démarré sur le port "+PORT)
})