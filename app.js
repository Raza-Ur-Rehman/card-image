let box = document.getElementById('box');
let img = [];
// let backImg = [];

// function hideCard() {
//     img.pop();
//     // for (let i = 1; i <= 40; i++) { 
        
//     //     box.innerHTML += `<img class="img" src="images/cardback.png" alt="Loading..">`;
//     //     backimg.push(box);
        
//     // }
// };
function showCard() {
for (let i = 1; i <= 13; i++) { 
    box.innerHTML += `<img class="img" src="images/clubs_${[i]}.png" alt="Loading..">`;
    img.push(box);
};

for (let i = 1; i <= 13; i++) {
    
    box.innerHTML += `<img class="img" src="images/diamonds_${[i]}.png" alt="Loading..">`;
    img.push(box);
};

for (let i = 1; i <= 13; i++) {  
    box.innerHTML += `<img class="img" src="images/hearts_${[i]}.png" alt="Loading..">`;
    img.push(box);
};

for (let i = 1; i <= 13; i++) {
    
    box.innerHTML += `<img class="img" src="images/spades_${[i]}.png" alt="Loading..">`;
    img.push(box);
};

};
console.log(img);

// function hideCard() {

// };










