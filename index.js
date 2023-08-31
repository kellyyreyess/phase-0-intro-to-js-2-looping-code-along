// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }


// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) { 
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }
//     return gifts;
// }

const cards = ["Birthday", "Guadalupe", "Ollie", "Aki"];

function writeCards(cards) { 
    const messages = []
    for (let c = 0; c < cards.length; c++) {
        console.log(`Thank you, ${cards[c]}, for the wonderful surprise gift!`);
        messages.push(`Thank you, ${cards[c]}, for the wonderful surprise gift!`);

    }
    return messages;
 }
   

console.log(writeCards(cards)) 

function countDown() { 
    let countDown = 10;
    while (countDown > -1) {
        console.log(countDown--)
    }
}
  

