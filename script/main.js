import { Sudoku } from './sudoku.js';
import { resetBoard, setBoard } from './setup.js';

function init() {
    resetBoard();
    Sudoku.getBoard('easy').then(() => {
        setBoard();
    });
}

init();