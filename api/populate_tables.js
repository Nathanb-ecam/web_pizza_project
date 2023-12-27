
const sequelize  = require('./db');

let Chicken = require('./models/chickenModel');
let Pizza = require('./models/pizzaModel');
let Sauce = require('./models/sauceModel');
let Drink = require('./models/drinkModel');
let User = require('./models/userModel');


async function create_table_data() {
  try {
    // Sync the models with the database
    await sequelize.sync();

    // Sample data to insert
    const pizzas = [
      { name: 'Margherita', price: 10.99, desc: 'Classic Margherita Pizza' },
      { name: 'Pepperoni', price: 12.99, desc: 'Pepperoni and Cheese' },
      
    ];
    const drinks = [
      { name: 'Coca cola', price: 1.99, desc: '50ml' },
      { name: 'Fanta', price: 2.0, desc: '33ml' },
      
    ];
    const chickens = [
      { name: 'wings', price: 6.99, desc: 'x4' },
      { name: 'nuggets', price: 5.99, desc: 'x6' },
      
    ];
    const sauces = [
      { name: 'Ketchup', price: 0.99, desc: '' },
      { name: 'Bbq', price: 0.99, desc: '' },
      
    ];
  

    // Insert data into the Pizza table
    await Pizza.bulkCreate(pizzas);
    await Chicken.bulkCreate(chickens);
    await Drink.bulkCreate(drinks);
    await Sauce.bulkCreate(sauces);
    await User.bulkCreate(users);

    console.log('Tables populated successfully.');
  } catch (error) {
    console.error('Error populating tables:', error);
  } finally {
    // Close the Sequelize connection
    await sequelize.close();
  }
}

create_table_data();
