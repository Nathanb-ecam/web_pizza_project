let express = require('express');
let router = express.Router();


let pizzaController = require('./controllers/pizzaController');


router.get('/',(req,res)=>{
    res.json({"message":"Welcome to pizza hut"});
});

router.get('/pizza/:pizza_id',pizzaController.pizzaDetails);


module.exports = router;