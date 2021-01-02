import { Sudoku } from './sudoku.js';
import { resetBoard, setBoard } from './setup.js';

const new_btn = Helper.id('new_btn');
const restart_btn = Helper.id('restart_btn');
const level_btn_panel = Helper.id('level_panel');

const level_list = ['easy', 'medium', 'hard'];

new_btn.onclick = () => {
    Helper.toggleClass(level_btn_panel, 'show');
};

restart_btn.onclick = () => {
    resetBoard();
    setBoard();
};

level_list.forEach(level => {
    level_btn_panel.append(createBtn(level))
})

function createBtn(level) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerText = level;
    btn.dataset.level = level;
    btn.classList.add('level_btn');

    btn.onclick = newGame;

    return btn;
}

function newGame() {
    Helper.removeClass(level_btn_panel, 'show');
    
    resetBoard();
    Sudoku.getBoard(this.dataset.level).then(setBoard);
}