// Code your solutions in this file
for (let age=30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}

wrapGifts(gifts);


function writeCards(namesArray, event){
    let newArray = [];
    for (let count=0; count < namesArray.length; count+=1 ){
        newArray.push(`Thank you, ${namesArray[count]}, for the wonderful ${event} gift!`);
    }
    console.log(newArray)
    return newArray;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");



function countDown(number){
    let count = number;
    while (count >= 0){
        console.log(count);
        count-=1;
    }
}

countDown(10);




