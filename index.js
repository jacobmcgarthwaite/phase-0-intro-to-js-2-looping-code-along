// Code your solutions in this file
for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
    }
    return gifts;
}
wrapGifts(gifts);



// Test 1

const names = ["Lisa", "Kaitlin", "Jan"];

function writeCards(names){
    for (let i = 0; i < names.length; i++){
     console.log(`Thank you, ${names}, for the wonderful surprise gift!`);
   
    }
    return names;
}

writeCards(names);

// Test 2

function countDown(){
    let counter = 10;
    while (counter >= 0){
        console.log(counter)
        counter--;
    }
}