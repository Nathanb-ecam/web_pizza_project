class Formula{
    constructor(name,price,description,drink_quantity=0,pizza_quantity=0,chicken_quantity=0,sauce_quantity=0){
        this.name = name;
        this.price = price;
        this.desc = description;
        this.pizza_quantity = pizza_quantity;
        this.chicken_quantity = chicken_quantity;
        this.sauce_quantity = sauce_quantity;
        this.drink_quantity = drink_quantity;
    }
}

module.exports = Formula;