const student = {
    name:'Shafrin Ahamed',
    money: 5000,
    studey:"CSE",
    subjects: ['C-Programming','Java Programming','python language'],
    exam: function()
    {
       return this.money + ' is participating in exam';
    },
    improveExam: function(subject){
        this.exam();
        return  ` ${this.name} is takeing improvement exam on ${subject}`
    },
    treatDey: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
}
const output = student.exam();
// console.log(output);
const reExam  = student.improveExam('EEE');
// console.log(reExam);

const remaining = student.treatDey(900, 100);
console.log(remaining);

const dolaRemaining = student.treatDey(500, 100);
console.log(dolaRemaining);