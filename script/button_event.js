const new_btn = Helper.id('new-btn');
const restart_btn = Helper.id('restart-btn')
const toggle_option = Helper.id('start-option');
const start_btn_list = Helper.qsa('.start-btn');

new_btn.addEventListener('click', () =>  Helper.toggleClass(toggle_option, 'show'))

start_btn_list.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const level = e.target.innerText.toLowerCase();
        board = new Board(level);
        Helper.removeClass(toggle_option, 'show')
    })
});

restart_btn.addEventListener('click', () => {
    board.newGame();
})