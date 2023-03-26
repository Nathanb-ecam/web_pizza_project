let express = require('express');
let router = express.Router();


let pizzaController = require('./controllers/pizzaController');
let chickenController = require('./controllers/chickenController');
let sauceController = require('./controllers/sauceController');
let extraController = require('./controllers/extraController');
let drinkController = require('./controllers/drinkController');
let menuController = require('./controllers/menuController');


router.get('/',(req,res)=>{
    res.json({"message":"Welcome to pizza hut"});
});


router.get('/chicken/:chicken_id',chickenController.chickenDetails);
router.get('/sauce/:sauce_id',sauceController.sauceDetails);
router.get('/extra/:extra_id',extraController.extraDetails);

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
router.get('/menus/',menuController.listMenus);
router.get('/menu/:menu_id',menuController.menuDetails);
router.delete('/menu/:menu_id',menuController.deleteMenu);
router.post('/menu',menuController.createMenu);

module.exports = router;