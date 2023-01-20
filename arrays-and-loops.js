//*****Arrays*******

//Activity 1 

let songList=[
    "Blah- By The Blahs",
    "joe- By joe Blogs",
    "Something else- By someoneelse"
];

songList.push("something- By SomeoneElse", "Another one- By the Same one")
songList.pop();
console.log(songList);

//Activity 2

let songList=[
    "Blah- By The Blahs",
    "joe- By joe Blogs",
    "Something else- By someoneelse",
    "something- By SomeoneElse",
    
];
// songList.shift();
songList.splice(2,0,"Another one- By the Same one");
console.log(songList);

(splice perameters-- look at, delete, add this)







//*****Loops*****

//Activity 1

let favChocolates=[
    "Twirl",
    "Mars",
    "Twix",
    "Flake",
    "milkybar"
];
favChocolates.push("Galaxy", "Snikers")
console.log(favChocolates);

for (let i = 0; i < favChocolates.length; i++){
    console.log (favChocolates [i]);
}

//Activity 2
// Note to self need to include Math floor/ceil as it will not generate whole numbers otherwise. 

const numberList = [];
while(numberList.length < 6){
    const generatedNo = Math.floor(Math.random() * 50) + 1;
    if(numberList.indexOf(generatedNo) === -1) numberList.push(generatedNo);
}
console.log(numberList)

//Activity 3

//If we can create a loop to put 0-9 on the screen, how can we count from 9-0? Create a program that does this.



for(let i = 0; i < 9; i++){
    console.log (i+1)
}
//Must add the i-=1 or the i would remain at ten and not continue at 9.
for (let i=10; i>0; i-=1){
    console.log (i-1);
}


// Avtivity 4

//Displays 4 films stored in an array.Use a for loop to show each film in the array.Use an if statement to check if the 3rd film in the array is
//Ghostbusters.If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo!we want Ghostbusters!

let movieList = [
    'Spiderman',
    'Avengers',
    'Ghostbusters',
    'Peppa pig'];

console.log (movieList)

for (let i = 0; i<movieList.length; i++){
    if (movieList [2] === 'Ghostbusters'){
    console.log ("Yay, It's Ghostbusters")
    }
    else {
    console.log ("Boo, we want Ghostbusters!")
    }
}

//Avtivity 5

const numberList = [];
while(numberList.length < 6){
    const generatedNo = Math.floor(Math.random() * 30) + 1;
    if(numberList.indexOf (generatedNo) === -1) numberList.push(generatedNo);
        if (generatedNo % 7 ==0){
            console.log (`This Number is Divisible by 7 -${generatedNo}`)
        }
}
console.log(numberList)

//Activity 6
//Mutual followers Programme
//Nested Loop-  a loop that is nested inside another loop. 
//This means that it executes the statements inside the loop body limit number of times. In a nested loop the statement inside the for loop body is again a for loop. This causes The inside for loop to execute all the way through , for each iteration of the outer for loop.(The nested loop runs its complete self everytime the biggerloop runs)

let friendList1=[
    "Gaz",
    "Lee",
    "Jessica",
    "Adam", 
    "Cathrine"

];

let friendList2=[
    "Matthew",
    "John",
    "Karis",
    "Robert", 
    "Cathrine"
];

for(let i =0; i <friendList1.length; i++){
    for (let a=0;  a <friendList2.length; a++){
        if(friendList1 [i]=== friendList2 [a]){
           console.log(`This friend is a Match = ${friendList1 [i]}`) 
        }     
    }
}

//Activity 7
//Research on do...while loop, find out about the difference between for loop, while loop and do...while loop. Give an example of each. What are the pros and cons?