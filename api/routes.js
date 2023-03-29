let express = require('express');
let router = express.Router();


let pizzaController = require('./controllers/pizzaController');
let chickenController = require('./controllers/chickenController');
let sauceController = require('./controllers/sauceController');
let extraController = require('./controllers/extraController');
let drinkController = require('./controllers/drinkController');
let menuController = require('./controllers/menuController');
let userController = require('./controllers/userController');


router.get('/',(req,res)=>{
    res.json({"message":"Welcome to pizza hut"});
});

//chicken
router.get('/chicken/:chicken_id',chickenController.chickenDetails);
router.get('/chickens/',chickenController.chickenList);
router.delete('/chicken/:chicken_id',chickenController.deleteChicken);
router.post('/chicken',chickenController.createChicken);


//sauce
router.get('/sauce/:sauce_id',sauceController.sauceDetails);
router.get('/sauces/',sauceController.sauceList);
router.delete('/sauce/:sauce_id',sauceController.deleteSauce);
router.post('/sauce',sauceController.createSauce);


//extra
router.get('/extra/:extra_id',extraController.extraDetails);
router.get('/extras/',extraController.extraList);
router.delete('/extra/:extra_id',extraController.deleteExtra);
router.post('/extra',extraController.createExtra);







// updated routes
// user
router.get('/users/',userController.listUsers);
router.get('/user/:user_id',userController.searchUser);
router.delete('/user/:user_id',userController.deleteUser);
router.post('/users',userController.createUser);

// drink
router.get('/drinks/',drinkController.listDrinks);
router.get('/drink/:drink_id',drinkController.searchDrink);
router.delete('/drink/:drink_id',drinkController.deleteDrink);
router.post('/drinks',drinkController.createDrink);

// menu
router.get('/menus/',menuController.listMenus);
router.get('/menu/:menu_id',menuController.searchMenu);
router.delete('/menu/:menu_id',menuController.deleteMenu);
router.post('/menus',menuController.createMenu);

// pizza
router.get('/pizzas/',pizzaController.listPizzas);
router.get('/pizza/:pizza_id',pizzaController.searchPizza);
router.delete('/pizza/:pizza_id',pizzaController.deletePizza);
router.post('/pizzas',pizzaController.createPizza);


module.exports = router;