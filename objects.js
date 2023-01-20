//**Lesson tasks and Activities.**

const person0 = {
    name: "Jess",
    age: "32",
    favDrink: "Vimpto",
    favMeal: "Roast Dinner",
    }

person0.favChocolate =["twirl","milkybar","Snickers","Mars"]
    

console.log (person0.age)
console.log (person0.favDrink)
console.log (person0.favChocolate)

console.log ( person0.name, person0.age)

console.log (`Hello, my name is ${person0.name}`)

//Also need to know using Suqare brackets.  
//i.e console.log (person0["age"]) 


//Activity 1

const person = {
    name: "Jess",
    sayHi: () =>{    
    console.log (`Hello, my name is ${person.name}`)
    },
    age: "32",
    favDrink: "Vimpto",
    favMeal: "Roast Dinner",
    }

person.sayHi()
    
//**this** This is a special key word in javascript that refers to the current Object. So change person.name this.name and it will evaluate to the same value or`do the same job`. This only applies to the current object it is within/belongs to. Using This allows names of variables to change without meaning the function would break.
// To use this is can not be an arrow function. => needs to be a standard funtion declaraton.

const person2 = {
     name: "Jess",
    sayHi (){    
    console.log (`Hello, my name is ${this.name}`)
    },
    age: "32",
    favDrink: "Vimpto",
    favMeal: "Roast Dinner",
    }
    
person2.sayHi()


//Activity 2

const pet={
    name: "Luna",
    typeOfPet: "Dog",
    age: "6",
    colour: "Black and Tan",
    eat (){    
        console.log (`$this.name} is eating`)
        },
    drink(){    
        console.log (`${this.name} is drinking`)
        },
}
pet.eat()


//Activity 3
//Remember numbers dont need `` around numbers. Spent too long tryig to figure out why code was broken. 


const CoffeeShop = {
    branch: `Greggs`,
    flatWhite: 2.50,
    cappuccino:2.60,
    latte: 2.10,
    americano: 2.00,
    mocha: 2.40,
    baconRoll: 2.60,
    sausageRoll:1.30,
    steakBake: 2.10,
    order1 (){
            const total=(this.flatWhite + this.steakBake);
        console.log (`Your ${this.branch} order total is ${total}`)    
        },
    order2 (){
            const total=(this.mocha + this.sausageRoll);
        console.log (`Your ${this.branch} order total is ${total}`)    
        }

}
CoffeeShop.order1 ()
CoffeeShop.order2 ()