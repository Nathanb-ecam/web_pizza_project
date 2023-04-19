var express = require('express');
let app = express();
const PORT = process.env.NODE_PORT |80

let cors = require('cors');
// app.use(express.urlencoded())
app.use(express.json());
app.use(cors());

//import database
const sequelize = require('./db.js');
sequelize.sync()



let routes = require('./routes');
app.use('/api',routes);



app.listen(3000,()=>{
    console.log("Serveur démarré ...");
})