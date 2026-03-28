//Determine the types of scope you will need to create for the code structure. 
// You will be developing a menu with milkshakes and burgers. 
// You will also be creating menu features for both the milkshake and burger.
//index.js if statement uses the .push() array method to add anotherNewBurger, which has the value of 'Maple Bacon Burger', to the burgers array
//Expected the burgers array to have the string 'Maple Bacon Burger' as one of its elements: expected false to equal true
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';
JavaShake = 'Strawberry Milkshake';

function addBurger(){
    const newBurger = 'Flatburger';
    burgers.push(newBurger);
}

if(false === true){
    const anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger);
}

changeFeaturedDrink();
function changeFeaturedDrink(){
    featuredDrink = 'Strawberry Milkshake';
    const Milkshake = 'The JavaShake';
    featuredDrink = Milkshake;
}

console.log(burgers);
console.log(featuredDrink);