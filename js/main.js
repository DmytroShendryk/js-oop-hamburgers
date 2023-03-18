class Hamburger {
    static SIZE_SMALL = {price: 50, calories: 20};
    static SIZE_BIG = {price: 100, calories: 40};
    static STUFFING_CHEESE = {price: 10, calories: 20};
    static STUFFING_SALAD = {price: 20, calories: 5};
    static STUFFING_POTATO = {price: 15, calories: 10};
    static TOPPING_MAYO = {price: 20, calories: 5};
    static TOPPING_SPICE = {price: 15, calories: 0};

    constructor(size, stuffing){
        this.size = size;
        this.stuffing = stuffing;
        this.topping = [];
    }

    addTopping(topping){
        this.topping.push(topping);
    }

    calculatePrice(){
        const toppingPrice = this.topping.reduce((total, topping) => total + topping.price, 0);
        return this.size.calories + this.stuffing.calories + toppingPrice;
    }

    calculateCalories(){
        const toppingCalories = this.topping.reduce((total, topping) => total + topping.calories, 0);
        return this.size.calories + this.stuffing.calories + toppingCalories;
    }
}
// small hamburger with cheese
console.log('small hamburger with cheese');
const hamburgerSmlChs = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburgerSmlChs.addTopping(Hamburger.TOPPING_MAYO);
console.log(`Calories: ${hamburgerSmlChs.calculateCalories()}`);
console.log(`Price: ${hamburgerSmlChs.calculatePrice()}`);
hamburgerSmlChs.addTopping(Hamburger.TOPPING_SPICE);
console.log(`Price with sause: ${hamburgerSmlChs.calculatePrice()}`);
// small hamburger with salad
console.log('small hamburger with salad');
const hamburgerSmlSld = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_SALAD);
hamburgerSmlSld.addTopping(Hamburger.TOPPING_MAYO);
console.log(`Calories: ${hamburgerSmlSld.calculateCalories()}`);
console.log(`Price: ${hamburgerSmlSld.calculatePrice()}`);
hamburgerSmlSld.addTopping(Hamburger.TOPPING_SPICE);
console.log(`Price with sause: ${hamburgerSmlSld.calculatePrice()}`);
// small hamburger with potato
console.log('small hamburger with potato');
const hamburgerSmlPtt = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_POTATO);
hamburgerSmlPtt.addTopping(Hamburger.TOPPING_MAYO);
console.log(`Calories: ${hamburgerSmlPtt.calculateCalories()}`);
console.log(`Price: ${hamburgerSmlPtt.calculatePrice()}`);
hamburgerSmlPtt.addTopping(Hamburger.TOPPING_SPICE);
console.log(`Price with sause: ${hamburgerSmlPtt.calculatePrice()}`);
// big hamburger with cheese
console.log('big hamburger with cheese');
const hamburgerBgChs = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_CHEESE);
hamburgerBgChs.addTopping(Hamburger.TOPPING_MAYO);
console.log(`Calories: ${hamburgerBgChs.calculateCalories()}`);
console.log(`Price: ${hamburgerBgChs.calculatePrice()}`);
hamburgerBgChs.addTopping(Hamburger.TOPPING_SPICE);
console.log(`Price with sause: ${hamburgerBgChs.calculatePrice()}`);
// big hamburger with salad
console.log('big hamburger with salad');
const hamburgerBgSld = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_SALAD);
hamburgerBgSld.addTopping(Hamburger.TOPPING_MAYO);
console.log(`Calories: ${hamburgerBgSld.calculateCalories()}`);
console.log(`Price: ${hamburgerBgSld.calculatePrice()}`);
hamburgerBgSld.addTopping(Hamburger.TOPPING_SPICE);
console.log(`Price with sause: ${hamburgerBgSld.calculatePrice()}`);
// big hamburger with potato
console.log('big hamburger with potato');
const hamburgerBgPtt = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_POTATO);
hamburgerBgPtt.addTopping(Hamburger.TOPPING_MAYO);
console.log(`Calories: ${hamburgerBgPtt.calculateCalories()}`);
console.log(`Price: ${hamburgerBgPtt.calculatePrice()}`);
hamburgerBgPtt.addTopping(Hamburger.TOPPING_SPICE);
console.log(`Price with sause: ${hamburgerBgPtt.calculatePrice()}`);