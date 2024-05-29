let box = document.getElementById('box');
let img = [];
let btn = document.querySelector('#btn');
let showCard = false;

function showhideCard() {

    showCard = !showCard;
    
    for (let i = 1; i <= 54; i++) {
        box.innerHTML += `<img class="backimg" src="images/cardback.png" alt="Loading..">`;
        btn.innerText = "SHOW CARDs"
    
    }
    if (!showCard) {
        for (let i = 1; i <= 13; i++) {
            box.innerHTML += `<img class="img" src="images/clubs_${[i]}.png" alt="Loading..">`;
            img.push(box);
        }

        for (let i = 1; i <= 13; i++) {

            box.innerHTML += `<img class="img" src="images/diamonds_${[i]}.png" alt="Loading..">`;
            img.push(box);
        }

        for (let i = 1; i <= 13; i++) {
            box.innerHTML += `<img class="img" src="images/hearts_${[i]}.png" alt="Loading..">`;
            img.push(box);
        }

        for (let i = 1; i <= 13; i++) {

            box.innerHTML += `<img class="img" src="images/spades_${[i]}.png" alt="Loading..">`;
            img.push(box);
        }
        btn.innerText = "HIDE CARDs"
    }
}
console.log(img);

// function hideCard() {

// };










