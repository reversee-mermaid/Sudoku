import { Board } from './board.js';

let counter = null;

export function startCount() {
    counter = setInterval(() => {
        Board.count++;
        const count_field = document.getElementById('count');
        count_field.innerText = formatCount();
    }, 1000)
}

export function resetCount() {
    const count_field = document.getElementById('count');
    clearInterval(counter);
    Board.count = 0;
    count_field.innerText = formatCount();
}

function formatCount() {
    const format = (sec) => sec < 10 ? `0${sec}` : sec;
    const time = {
        mm: format(Math.floor(Board.count / 60)),
        ss: format(Board.count % 60)
    }
    return `${time.mm}:${time.ss}`
}
