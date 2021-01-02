import { Board } from './board.js';
import { startCount, resetCount } from './count.js'

//set board
export function setBoard() {
    setStatus()
    fillBoard()
    startCount()
}

function setStatus() {
    document.getElementById('level').innerText = Board.level;
}

function fillBoard() {
    const board = document.getElementById('board');
    const { question } = Board;

    board.childNodes.forEach((tr, tr_i) => {
        tr.childNodes.forEach((td, td_i) => {
            td.innerText = question[tr_i][td_i] || null;
            td.classList.add(
                question[tr_i][td_i] ? 'fixed' : 'editable'
            );
        })
    })
}


// reset Board
export function resetBoard() {
    resetCount()
    clearBoard()
}

function clearBoard() {
    const container = document.getElementById('board');
    container.innerHTML = null;

    for (let row = 0; row < 9; row++) {
        const tr = document.createElement('tr');

        for (let column = 0; column < 9; column++) {
            const dataset = {
                row: row,
                column: column,
                grid: parseInt(row / 3) * 3 + parseInt(column / 3)
            }

            const td = document.createElement('td');
            for (const key in dataset) {
                td.dataset[key] = dataset[key] + 1;
            }
            
            tr.append(td);
        }
        container.append(tr)
    }
}