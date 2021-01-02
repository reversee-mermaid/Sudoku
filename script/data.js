export const data = {
    getQuestion: function(level) {
        const url = `https://sugoku.herokuapp.com/board?difficulty=${level}`;
        return (
            axios.get(url)
                .then(res => {
                    if(res.status == 200) {
                        return res.data.board
                    }
                })
        )
    },
    getAnswer: function(board) {
        const url = 'https://sugoku.herokuapp.com/solve';
        return (
            axios({
                method: 'POST',
                url: url,
                data: this.convert(board)
            })
            .then(res => {
                if(res.status == 200) {
                    return res.data.solution
                }
            })
        )
    },
    convert: function(board) {
        const data = {
            board: JSON.stringify(board)
        }

        let result = [];
        for(const key in data) {
            if(data.hasOwnProperty(key)) {
                const k = encodeURIComponent(key);
                const v = encodeURIComponent(data[key]);
                result.push(`${k}=${v}`);
            }
        }
        
        return result.join('&');
    }
}