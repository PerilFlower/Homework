// Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ["Pepperoni", "Pineapple", "Sausage", "Bell Peppers"];

// Create a greetCustomer function that welcomes a guest and informs them of the available toppings
function greetCustomer() {
  let greeting = `Welcome to The Pizza Man, our toppings are: `;
  for (let topping of pizzaToppings) {
    greeting += `${topping}, `;
  }
  console.log(greeting);
}
greetCustomer();

// Create a getPizzaOrder function
function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size} ${crust} crust pizza with `;
  for (let topping of toppings) {
    order += `${topping}, `;
  }
  console.log(`${order}. Coming up!`);
  return [size, crust, toppings];
}

let customerOrder = getPizzaOrder(
  "Large",
  "Cheese Stuffed crust",
  "Pepperoni",
  "Bell Peppers",
  "Sausage",
  "Pineapple"
);

// Create a preparePizza function
function preparePizza([orderSize, orderCrust, orderToppings]) {
  console.log("...your pizza is cooking...");
  return {
    size: orderSize,
    crust: orderCrust,
    toppings: orderToppings
  };
}

let cookedPizza = preparePizza(customerOrder);

// Create a servePizza function
function servePizza(pizza) {
  let orderReady = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `;
  for (let topping of pizza.toppings) {
    orderReady += `${topping}, `;
  }
  console.log(`${orderReady}. Enjoy!`);
  return pizza;
}

servePizza(cookedPizza);
