
//Activity 1
let age = 17;

if (age < 18){
console. log (`too young to drink`)
}
else {
    console.log (`Old enough to drink`)
}

//Activity 1 Stretch
let ageis = 17;
let place = "uk";

if (ageis < 18 && place == "uk"){
console. log (`too young to drink`)
}
else {
    console.log (`Old enough to drink`)
}

//Activity 2
let topping = "catFood"

if (topping == "ham" || topping =="pinapple" || topping =="chicken" || topping =="pepperoni" || topping =="goatsCheese" || topping =="caramalised onion"){
    console.log (`I don't mind having ${topping} on my pizza.`)
}
else if (topping == "mushroom" || topping =="SpicyMeatballs" || topping =="catFood"){
    console.log (`${topping} should not be on my pizza`)
}



//Activity 3
let password = "codeNati"

if (password.length > 8 ){
    console.log ("Your password passed");
}
else if(password.length <= 8){
    console.log ("Please create a password greater than 8 Characters");
}


//Activity 4
let num = 2

if (num%3 ===0){
    console.log ("This is divisible by 3/Fizz")
}
else if(num%5 ===0){
    console.log ("This is divisible by 5/Buzz")
}
else if (num%3 ===0 && num%5 ===0){
    console.log (`Fizz Buzz`)
}
else{
    console.log (num)
}

//Activity 5

let number = 2020236311111

let numberstring = number.toString();
let reverse = numberstring.split(``).reverse().join(``);

if (reverse === numberstring){
console.log ("This is a pallindrome")
}
else if (reverse !== numberstring){
console.log ("This is NOT a pallindrome")
}

//Activity 6

let time = 23

switch(time){
    case 7:
        console.log("At home")
        break;
    case 8:
        console.log("Traveling to work")
        break;
    case 9:
    case 10:
    case 11:
    console.log("At work")
        break;
    case 12:
        console.log("out to lunch")
        break;
    case 13:        
    case 14:
    case 15:
    case 16:
    case 17:
        console.log("At Work")
        break;
    case 18:
        console.log("Travel Home")
        break;
    case 19:
        console.log("Dinner Time")
        break;
    case 20:
        console.log("Putting the Children to bed")
        break;
    case 21:
        console.log("TV Time")
        break;
    case 22:
        console.log("off to bed")
        break;
    default:
    console.log ("Asleep")
}

//Activity 7

let text = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
console.log (text.length)
console.log (text.lastIndexOf('a'));
console.log (text.lastIndexOf('e'));
console.log (text.lastIndexOf('i'));
console.log (text.lastIndexOf('o'));
console.log (text.lastIndexOf('u'));
