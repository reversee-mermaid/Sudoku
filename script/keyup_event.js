window.addEventListener('keyup', (e) => {
    if(!board.cell) return;
    if(e.key.includes('Arrow')) arrow_key_event(e.key);

    if(!board.cell.editable) return;
    if(parseInt(e.key)) num_key_event(e.key);
    if(e.key == 'Delete' || e.key == 'Backspace') del_key_event();
})

function del_key_event() {
    board.cell.updateValue(null);
}

function num_key_event(key) {
    const num = parseInt(key);
    board.cell.updateValue(num);
    if(Helper.qs('.wrong')) return;
    board.confilm();
}

function arrow_key_event(key) {
    const arrow = key.replace('Arrow', '').toLowerCase();
    let {row, column} = board.cell.cell.dataset;
    
    switch (arrow) {
        case 'down': {
            row >= 1 && row < 9 ? row++ : null;
            break;
        }
    
        case 'up': {
            row > 1 && row <= 9 ? row-- : null;
            break;
        }
    
        case 'right': {
            column >= 1 && column < 9 ? column++ : null;
            break;
        }
    
        case 'left': {
            column > 1 && column <= 9 ? column-- : null;
            break;
        }
    
        default:
            break;
    }

    let selector = `.row:nth-child(${row}) > .cell:nth-child(${column})`
    board.cell = new Cell(Helper.qs(selector))
}