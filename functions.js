//Class Activity Cinema Tickets
let age = 60;

if (age < 18){
console. log (`Child-Ticket price £8`)
}
if (age >=18 &&  age <=60){
    console. log (`Adult-Ticket Price £10.95`)
    }
else if (age >60){
        console. log (`Senior- Ticket price £7.50`)
        }


//Class Activity fav colour
const favcolour= () =>{
    console.log("my Fav colour is Blue");
}
favcolour();

//Class Activity fav colour extended.
const favColour = (colone, coltwo) => {
    console.log(`My fav colours are ${colone} and ${coltwo}`);
}

favColour("blue", "yellow");
favColour("blue", "Orannge");
favColour("Green", "red");
favColour("black", "white");


// Activity 1

const factorial = (n) =>{
    if((n===0) || (n===1)) {
        return 1;
    } 
    else {
    return (n* factorial (n-1));}
}
console.log ( factorial (33));


//Activity 2

let orderCount= 3;

const takeOrder = (topping, toppingtwo) => {
    console.log(`Pizza with ${topping} and ${toppingtwo}`);
    orderCount++;
}
takeOrder("pineapple", "Ham");
console.log (orderCount)


//Activity 3 Cash Machine

const attemptAccess = (numInserted, amountRequested) => {
    const accNumber = 3456
    const fundsAvail = 5678
    if (numInserted === accNumber){
        console.log (`Access Granted`);
        if (amountRequested <= fundsAvail){
            console.log (`Dispensing Funds`);
        }
        else{
            console.log(`Funds insufficient`)
        }
    }
    else {
        console.log (`Access Denied`)
    }
}

attemptAccess (3456, 1000)
attemptAccess (3245, 300)
attemptAccess (3456, 5689)
attemptAccess (3456, 5678)