let mainbox = document.querySelector('.main');
let box = document.getElementById('box');
let btn = document.querySelector('#btn');
let mainimg = document.querySelector('#mainimg');
// let card = [];
// let backcard = [];

let showCard = false;

function showhideCard() {
    mainimg.style.display = "none";
    mainbox.style.flexDirection = "row";
    showCard = !showCard;
    box.innerHTML = '';

    if (showCard) {

        for (let i = 1; i <= 52; i++) {
            box.innerHTML += `<img class="img" onclick="showhideCard();" src="images/cardback.png" alt="Loading..">`;
            
        }
        btn.innerText = "SHOW CARDs"
        box.style.transition = '5s ease-in-out';  
      }
    else {
        for (let i = 1; i <= 13; i++) {
            box.innerHTML += `<img class="img" src="images/clubs_${[i]}.png" alt="Loading..">`;
            // card.push(box);
        }

        for (let i = 1; i <= 13; i++) {

            box.innerHTML += `<img class="img" src="images/diamonds_${[i]}.png" alt="Loading..">`;
            // card.push(box);
        }

        for (let i = 1; i <= 13; i++) {
            box.innerHTML += `<img class="img" src="images/hearts_${[i]}.png" alt="Loading..">`;
            // card.push(box);
        }

        for (let i = 1; i <= 13; i++) {

            box.innerHTML += `<img class="img" src="images/spades_${[i]}.png" alt="Loading..">`;
            // card.push(box);
        }
        btn.innerText = "HIDE CARDs";

    }
}
console.log(card);

// function hideCard() {

// };

// let img = document.querySelector('img');
// let text = document.querySelector('#text');
// let body = document.querySelector('body');

// let isOn = false;
// let count = 0;
// function bulbOnOff() {
//     count = count++;
//     if (count >= 5) {
//         body.innerHTML = `<h1>phat gaiii...</h1>`
//     }
//     isOn = !isOn;
//     if (isOn) {
//         img.src = "./on.png";
//         text.innerText = "on";
//         img.style.transition = ".2s ease-in-out";
//     }
//     else {
//         img.src = "./off.webp";
//         text.innerText = "off";
//         img.style.transition = ".2s ease-in-out";
//     }
// }








