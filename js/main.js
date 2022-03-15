const api = "https://api.adviceslip.com/advice";

const adviceNumber = document.getElementById('adviceNumber');
const adviceContent = document.getElementById('adviceContent');
const diceBtn = document.getElementById('diceBtn');

window.addEventListener('load', () => {
    rollDice();
})

diceBtn.addEventListener('click', (e) => {
    rollDice();
})

function rollDice() {
    loadingMessage();

    const response = fetch(api).then((value) => {
        return value.json();
    });

    response.then(result => {
        adviceNumber.innerText = "Advice #" + result.slip.id;
        adviceContent.innerText = result.slip.advice;
        console.log(result.slip)
    })
}

function loadingMessage() {
    adviceNumber.innerText = "Loading advice..."
    adviceContent.innerText = "Please wait..."
}