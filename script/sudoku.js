import { Board } from './board.js';

export const Sudoku = {
    getBoard: async function(level) {
        await Board.getData(level).then(() => {
            return Board;
        })
    }
}