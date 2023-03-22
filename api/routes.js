let express = require('express');
let router = express.Router();


let pizzaController = require('./controllers/pizzaController');
let chickenController = require('./controllers/chickenController');
let sauceController = require('./controllers/sauceController');
let extraController = require('./controllers/extraController');


router.get('/',(req,res)=>{
    res.json({"message":"Welcome to pizza hut"});
});

router.get('/pizza/:pizza_id',pizzaController.pizzaDetails);
router.get('/chicken/:chicken_id',chickenController.chickenDetails);
router.get('/sauce/:sauce_id',sauceController.sauceDetails);
router.get('/extra/:extra_id',extraController.extraDetails);

module.exports = router;