// Activity 1 + Stretch
let myName="Jess";
let favColor="yellow";
console.log(`Hi, my name is ${myName}, my fav colour is ${favColor}`);

myName="Craig";
favColor="orange";
console.log(`Hi, my name is ${myName}, my fav colour is ${favColor}`);



//Activity 2 + Stretch
let breackfast="Scrambled eggs";
let lunch="Jacket Potatoe and salad";
let dinner="chicken and smashed new potatoes";
console.log(`
Breackfast - ${breackfast}
Lunch - ${lunch}
Dinner - ${dinner}`);


breackfast="Bacon, egg and Asparagus soilders";
lunch="pasta";
dinner="Gammon";
console.log(`
Breackfast - ${breackfast}
Lunch - ${lunch}
Dinner - ${dinner}`);


// Activity 3
const date1 = new Date('1/16/2023');
const date2 = new Date('2/25/2023');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
console.log(diffTime + " milliseconds");
console.log(diffDays + " days");


//Activity 4
let crosses="X";
let noughts="o";

console.log(`
${crosses}   |  ${noughts}  |
    |     |
    |     |
-----------------
    |     |
${crosses}   |  ${crosses}  |
    |     |
-----------------
    |     |
${noughts}   |     |
    |     |
`)
