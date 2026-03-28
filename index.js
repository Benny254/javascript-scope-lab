//Determine the types of scope you will need to create for the code structure. 
// You will be developing a menu with milkshakes and burgers. 
// You will also be creating menu features for both the milkshake and burger.


const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';
JavaShake = 'Strawberry Milkshake';

function addBurger(){
    const newBurger = 'Flatburger';
    burgers.push(newBurger);
}

if(true === true){
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