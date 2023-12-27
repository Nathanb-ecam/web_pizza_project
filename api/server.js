const express = require('express');
let app = express();
const path = require('path')
// const PORT = process.env.NODE_PORT |80
const PORT =3000;

let cors = require('cors');
// app.use(express.urlencoded())
app.use(express.json());
app.use(cors());
app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));

//import database
const sequelize = require('./db.js');
sequelize.sync()





let routes = require('./routes');
app.use('/api',routes);



app.listen(PORT,()=>{
    console.log("Serveur démarré sur le port "+PORT)
})