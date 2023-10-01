//Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ["Pepperoni", "Pineapple", "Sausage", "Bell Peppers"];
//Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
//i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."
function greetCustomer() {
const greetCustomer = `Welcome to The Pizza Man, our toppings are:`;
for (let topping of pizzaToppings) { greeting +=`${topping}, `;}
  console.log(greeting);} greetCustomer();
//Create a getPizzaOrder function that
//has the parameters size, crust, and an indefinite amount of toppings as inputs
//prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
//outputs a list with the size, crust, and toppings
function getPizzaOrder(size,crust, ...toppings){
  let order = `One ${size} ${crust} crust pizza with`;
  for (let topping of toppings) {
    order += `$(topping},`;
  }
console.log(`${order}. Coming up!`);
return [size,crust,toppings];

console.log(size);
console.log(crust);
console.log(toppings);

let customerOrder = getPizzaOrder = (
  "Large",
  "Cheese Stuffed crust",
  "Pepperoni",
"Bell Peppers",
"Sausage",
"Pineapple");
//Create a preparePizza function that
//has an array as its parameter with three items: a size, a crust, and a list of toppings
function preparePizza ([orderSize,orderCrust, orderToppings]){
  console.log("...your pizza is cooking...");

  return {
    size: orderSize,
    crust: orderCrust,
    toppings: orderToppings
  };

} 
let cookedPizza = preparePizza(customerOrder);
//prints something like "...Cooking pizza..."

//outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
//Create a servePizza function that
//has a parameter of a pizza Object
function servePizza(pizza){
  let orderReady =  `Order up! Here's your ${pizza.size}
  ${pizza.crust} crust pizza with`;
  if (pizza.toppings.length === 0) {
    serveStr += "cheese";
} else {
    for (let i = 0; i < pizza.toppings.length; i++) {
        serveStr += pizza.toppings[i];
        if (i === pizza.toppings.length - 2) {
            serveStr += ", and ";
        } else if (i !== pizza.toppings.length - 1) {
            serveStr += ", ";
        }
    }
serveStr += "...enjoy!";
console.log(serveStr);
return pizza;
}