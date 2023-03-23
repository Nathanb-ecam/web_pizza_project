let express = require('express');
let router = express.Router();


let pizzaController = require('./controllers/pizzaController');
let drinkController = require('./controllers/drinkController');
let formulaController = require('./controllers/formulaController');


router.get('/',(req,res)=>{
    res.json({"message":"Welcome to pizza hut"});
});


// pizza
router.get('/pizza/:pizza_id',pizzaController.pizzaDetails);
router.get('/pizzas/',pizzaController.pizzaList);
router.delete('/pizza/:pizza_id',pizzaController.deletePizza);
router.post('/pizza',pizzaController.createPizza);



// pizza
router.get('/drink/:drink_id',drinkController.drinkDetails);
router.get('/drinks/',drinkController.drinkList);
router.delete('/drink/:drink_id',drinkController.deleteDrink);
router.post('/drink',drinkController.createDrink);


// formulas
router.get('/formula/:formula_id',formulaController.formulaDetails);
router.get('/formulas/',formulaController.listFormulas);
router.delete('/formula/:formula_id',formulaController.deleteFormula);
router.post('/formula',formulaController.createFormula);

module.exports = router;