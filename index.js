const squares = document.querySelectorAll('.container>div');
const headings = document.querySelectorAll('h1');
let squareId;
let score = 0;

squares.forEach(square => square.addEventListener('click', (event) => {

    const hit = new Audio('resources/hit-someting-6037.mp3');
    hit.play();
    if (event.target.id === squareId) {

        ++score;

        headings[0].firstElementChild.textContent = score;

    }

}))

const moveMole = () => {

    squares.forEach(square => {

        square.style.background = '';
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)]

    randomSquare.style.background = "url('resources/mole.jpg') no-repeat center center / cover";

    squareId = randomSquare.id;

}

setInterval(moveMole, 600)

const duration = 60;

const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes} : ${seconds.toString().padStart(2, '0')}`;
};

let timeRemaining = duration;

const timer = setInterval(() => {

    timeRemaining--;

    if (timeRemaining === 0) {

        clearInterval(timer);
        alert(`Your score is ${score}!`)
        window.location.reload()

    }

    headings[1].firstElementChild.textContent = formatTime(timeRemaining);


}, 1000);