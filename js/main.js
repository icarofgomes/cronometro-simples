const frases = [
    'Que os sonhos sejam leves e a noite cheia de paz!',
    'Que a paz do nosso senhor Jesus Cristo esteja conosco.',
    'Um pedaço de pão comido em paz é melhor do que um banquete comido com ansiedade.',
    'Ninguém será generoso se não for, ao mesmo tempo, justo.',
    'A grandeza não consiste em receber honras, mas merecê-las.',
    'O passado é um ótimo professor.'
];
let counter = document.querySelector("#counter");
let randomText = document.querySelector("#random-text");
let duration = 10;
const second = 1000;

const start = () => {
    setInterval(timer, second);
}

const timer = () => {
    duration -= 1;
    if(duration >= 0) {
        counter.innerHTML = duration;
    }
    if(duration === 0) {
        randomText.innerHTML = frases[Math.floor(Math.random()*frases.length)];
        clearInterval();
    }
}

document.addEventListener('DOMContentLoaded', () => start());
