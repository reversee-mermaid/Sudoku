class Sudoku {
    constructor(level) {
        return this.getSudoku(level)
    }

    getSudoku(level) {
        const random = Math.floor(Math.random() * sudoku_list[level].length);
        const newSudoku = sudoku_list[level][random];

        return newSudoku;
    }
}