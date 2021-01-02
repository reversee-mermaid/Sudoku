import { highlighting } from './cell.js';

window.onkeyup = keyup;

function keyup({ key }) {
    const selected = document.querySelector('.selected');
    if (!selected) return;

    if (key.includes('Arrow')) arrow_key_event(key, selected);
}

function arrow_key_event(key, selected) {
    let { row, column } = selected.dataset;
    const arrow = key.replace('Arrow', '').toLowerCase();

    switch (arrow) {
        case 'down':
            if (row >= 1 && row < 9) row++;
            break;

        case 'up':
            if (row > 1 && row <= 9) row--;
            break;

        case 'right':
            if (column >= 1 && column < 9) column++;
            break;

        case 'left':
            if (column > 1 && column <= 9) column--;
            break;

        default:
            break;
    }

    const query = `td[data-row="${row}"][data-column="${column}"]`;
    highlighting.call(document.querySelector(query))
}

function num_key_event(key) { }
function del_key_event() { }