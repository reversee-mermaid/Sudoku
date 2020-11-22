const board_container = Helper.id('board');
const level_lable = Helper.id('level');
const count_label = Helper.id('count');
const complete_pop = Helper.id('complete_pop');
const complete_count = Helper.id('complete_count');

let counter;

class Board {
    constructor(level) {
        this.level = level;
        this.sudoku = new Sudoku(level);
        this.count;
        this.cell = null;

        this.newGame()
    }

    stopGame() {
        complete_count.textContent = this.formatCount() + 's';
        Helper.addClass(complete_pop, 'show')
        
        clearInterval(counter);
        this.setStats()
    }

    newGame() {
        Helper.removeClass(complete_pop, 'show');

        clearInterval(counter);
        
        this.setStats();
        this.generateBoard();
        this.startCount();
    }
    
    formatCount() {
        const format = (sec) => sec < 10 ? `0${sec}` : sec;
        const seconds = this.count;
        const time = {
            mm: format(Math.floor(seconds / 60)),
            ss: format(seconds % 60)
        }
        return `${time.mm}:${time.ss}`
    }

    startCount() {
        count_label.textContent = '00:00';
        counter = setInterval(() => {
            this.count++;
            count_label.textContent = this.formatCount();
        }, 1000)
    }
    
    setStats() {
        this.count = 0;
        this.cell = null;
        level_lable.textContent = this.level;
        board_container.innerHTML = null;
    }

    generateBoard() {
        const {question} = this.sudoku;
        let data = {}
        let row;
        let cell;

        Array.from(question).forEach((char, char_i) => {
            data.row = parseInt(char_i / 9);
            data.column = char_i % 9;
            data.grid = parseInt(data.row / 3) * 3 + parseInt(data.column / 3);
            
            if(char_i % 9 == 0) {
                row = document.createElement('tr');
                row.className = 'row';
                board_container.appendChild(row);
            }

            cell = document.createElement('td');
            cell.className = char != '-' ? 'cell fixed' : 'cell editable';
            cell.textContent = char != '-' ? char : null;

            cell.dataset.row = data.row + 1;
            cell.dataset.column = data.column + 1;
            cell.dataset.grid = data.grid + 1;

            cell.addEventListener('click', (e) => this.cell = new Cell(e.target))
            row.appendChild(cell);
        })
    }

    confilm() {
        const answer = this.sudoku.answer;
        const cell_list = Array.from(Helper.qsa('.cell'));
        let wrong_answers = cell_list.filter((cell, cell_i) => (
            cell.textContent != answer[cell_i]
        ))

        if(!wrong_answers.length) this.stopGame();
    }
}
