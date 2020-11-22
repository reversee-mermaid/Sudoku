class Cell {
    constructor(selected) {
        this.cell = selected;
        this.editable = selected.classList.contains('editable');

        this.highlighting()
    }

    clearPrevious() {
        Helper.qsa('.cell').forEach(cell => {
            Helper.removeClass(cell, 'selected')
            Helper.removeClass(cell, 'range')
            Helper.removeClass(cell, 'equal')
        })
    }

    highlighting() {
        const selected = this.cell;
        
        this.clearPrevious();
        
        Helper.addClass(selected, 'selected');
        this.getRange(selected).forEach(range => Helper.addClass(range, 'range'));
        this.getEqual(selected).forEach(equal => Helper.addClass(equal, 'equal'))

        Helper.qsa('.cell').forEach(cell => {
            const value = cell.textContent;
            const range = this.getRange(cell);

            if(!value) {
                Helper.removeClass(cell, 'wrong');

            } else if(range.find(r => r.textContent == value) == undefined){
                Helper.removeClass(cell, 'wrong');

            } else {
                Helper.addClass(cell, 'wrong');
            }
        })
    }

    updateValue(num) {
        this.cell.textContent = num;
        this.highlighting();
    }

    getRange(el) {
        let range = [];

        Helper.qsa('.cell').forEach(cell => {
            if(cell == el) return;

            for(const [key, value] of Object.entries(cell.dataset)) {
                if(el.dataset[key] == value) {
                    range.push(cell);
                    return;
                }
            }
        })

        return range;
    }

    getEqual(el) {
        let equal = [];

        Helper.qsa('.cell').forEach(cell => {
            if(!cell.textContent || cell == el) return;
            if(cell.textContent == el.textContent) {
                equal.push(cell);
                return;
            }
        })
        
        return equal;
    }
}