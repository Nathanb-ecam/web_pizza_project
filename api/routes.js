let express = require('express');
let router = express.Router();
const multer = require('multer')
const path = require('path');

let pizzaController = require('./controllers/pizzaController');
let chickenController = require('./controllers/chickenController');
let sauceController = require('./controllers/sauceController');
let orderextraController = require('./controllers/orderExtraController');
let drinkController = require('./controllers/drinkController');
let menuController = require('./controllers/menuController');
let orderController = require('./controllers/orderController');
let elementOrderController = require('./controllers/elementOrderController');
let userController = require('./controllers/userController');
let authController = require('./controllers/authController');



// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Specify the directory where uploaded files will be stored
    },
    filename: (req, file, cb) => {
      const fileName = Date.now() + path.extname(file.originalname);
      cb(null, fileName);
    },
});
  
const upload = multer({ storage: storage });



//authentification
router.post('/login', authController.generateToken)






//chicken
router.get('/chicken/:id',chickenController.searchChicken);
router.get('/chickens/',chickenController.listChicken);
router.get('/chicken/name/:name',chickenController.searchChickenByName);
router.delete('/chicken/:id',authController.isAuthorized,chickenController.deleteChicken);
router.post('/chickens',authController.isAuthorized,chickenController.createChicken);


//sauce
router.get('/sauce/:id',sauceController.searchSauce);
router.get('/sauces/',sauceController.listSauce);
router.get('/sauce/name/:name',sauceController.searchSauceByName);
router.delete('/sauce/:id',authController.isAuthorized,sauceController.deleteSauce);
router.post('/sauces',authController.isAuthorized,sauceController.createSauce);



//order extra
router.get('/orderextra/:id',authController.isAuthorized,orderextraController.searchOrderExtra);
router.get('/orderextras/',authController.isAuthorized,orderextraController.listOrderExtra);
router.delete('/orderextra/:id',authController.isAuthorized,orderextraController.deleteOrderExtra);
router.post('/orderextras',authController.isAuthorized,orderextraController.createOrderExtra);


// user
router.get('/users/',authController.isAuthorized,userController.listUsers);
router.get('/user/:id',authController.isAuthorized,userController.searchUser);
router.delete('/user/:id',authController.isAuthorized,userController.deleteUser);
router.post('/users',authController.isAuthorized,userController.createUser);

// drink
router.get('/drinks/',drinkController.listDrinks);
router.get('/drink/:id',drinkController.searchDrink);
router.get('/drink/name/:name',drinkController.searchDrinkByName);
router.delete('/drink/:id',authController.isAuthorized,drinkController.deleteDrink);
router.post('/drinks',authController.isAuthorized,drinkController.createDrink);
router.put('/drink/:id',authController.isAuthorized,drinkController.updateDrink);

// menu
router.get('/menus/',authController.isAuthorized,menuController.listMenus);
router.get('/menusExplicit/',authController.isAuthorized,menuController.listMenusExplicit);
router.get('/menu/:id',authController.isAuthorized,menuController.searchMenu);
router.delete('/menu/:id',authController.isAuthorized,menuController.deleteMenu);
router.post('/menus',authController.isAuthorized,menuController.createMenu);
router.put('/menu/:id',authController.isAuthorized,menuController.modifyMenu);

// pizza
router.get('/pizzas/',pizzaController.listPizzas);
router.get('/pizza/:id',pizzaController.searchPizza);
router.get('/pizza/name/:name',pizzaController.searchPizzaByName);
router.delete('/pizza/:id',authController.isAuthorized,pizzaController.deletePizza);
router.delete('/pizzaDependencies/:id',authController.isAuthorized,pizzaController.deletePizzaDependencies);
router.post('/pizzas',upload.single('file'),pizzaController.createPizza);
router.put('/pizza/:id',authController.isAuthorized,pizzaController.updatePizza);

// order
router.get('/orders/',authController.isAuthorized,orderController.listOrder);
router.get('/order/:id',authController.isAuthorized,orderController.searchOrder);
router.delete('/order/:id',authController.isAuthorized,orderController.deleteOrder);
router.post('/orders/:user_id',authController.isAuthorized,orderController.createOrder );

// element order
router.get('/orderelements/',authController.isAuthorized,elementOrderController.listElementOrder);
router.get('/orderelement/:id',authController.isAuthorized,elementOrderController.searchElementOrder);
router.delete('/orderelement/:id',authController.isAuthorized,elementOrderController.deleteElementOrder);
router.post('/orderelements',authController.isAuthorized,elementOrderController.createElementOrder);


module.exports = router;