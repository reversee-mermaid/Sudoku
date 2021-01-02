import { data } from './data.js';

export const Board = {
    question: null,
    answer: null,
    level: '',
    count: 0,
    getData: async function(level) {
        this.level = level;

        this.question = await (
            data.getQuestion(level).then(q => q)
        )

        this.answer = await (
            data.getAnswer(this.question).then(a => a)
        )

        // console.log(this.level);
        // console.log(JSON.stringify(this.question));
        // console.log(JSON.stringify(this.answer));
    } 
}