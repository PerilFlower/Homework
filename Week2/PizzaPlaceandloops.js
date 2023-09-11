// pen the new homework directory in VS Code and create a new JavaScript file - name it something that indicates it is homework for Week 2
// Inside your JS file, create two variables: pizzaPlace and numberOfToppings
const pizzaPlace = "The Pizza Man";
let numberofToppings = 4;
//Have the variables reference the name of your Pizza Place and the number of toppings your Pizza Place offers.
//Print the variables and their types.
console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberofToppings, typeof numberofToppings);
//Print a template literal that uses both variables to construct a short sentence about your Pizza Place.
let Greeting = `"Hello, and welcome to ${pizzaPlace} where we offer pizzas with ${numberofToppings} different toppings!`;
console.log(Greeting);
//Construct an if statement that prints "Quality, not quantity." if you offer less than 10 toppings, or "A whole lot of pizza." if you offer 10 or more toppings.
function checkToppings(a) {
  if (a < 10) {
    return "Quality,not quantity.";
  } else {
    return "A whole lot of pizza.";
  }
}
console.log(checkToppings(numberofToppings));
// Expected output: "NOT positive"
// BONUS LOOP
for (let i = 2; i <= numberofToppings; i+=2) {
  console.log(i);

//Add, commit, and push your JS file to your GitHub repo.
//Send your TA a link to your GitHub Homework repo when finished.
