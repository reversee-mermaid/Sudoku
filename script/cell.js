function clearHighlight() {
    document.querySelectorAll('td').forEach(td => {
        td.classList.remove('selected');
        td.classList.remove('equal');
        td.classList.remove('range');
    })
}

export function highlighting() {
    clearHighlight();

    this.classList.add('selected');

    getEqual(this).forEach(equal => {
        equal.classList.add('equal')
    });

    getRange(this).forEach(range => {
        range.classList.add('range')
    })
}

function getEqual(selected) {
    let res = [];
    document.querySelectorAll('td').forEach(td => {
        if(td == selected) return; 
        if(td.innerText && td.innerText == selected.innerText) {
            res.push(td);
            return;
        }
    })
    return res;
}

function getRange(selected) {
    let res = [];
    
    document.querySelectorAll('td').forEach(td => {
        if(td == selected) return;
        for(const key in selected.dataset) {
            if(td.dataset[key] == selected.dataset[key] ) {
                res.push(td);
                return;
            }
        }
    })

    return res;
}