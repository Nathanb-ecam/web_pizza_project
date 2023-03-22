var express = require('express');
let app = express();

// app.use(express.urlencoded())
app.use(express.json());



let routes = require('./routes');
app.use('/api',routes);



app.listen(3000,()=>{
    console.log("Serveur démarré ...");
})