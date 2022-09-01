const student = {
    name:'Shafrin Ahamed',
    money: 5000,
    studey:"CSE",
    subjects: ['C-Programming','Java Programming','python language'],
    exam: function()
    {
        console.log(this.money, 'is participating in exam');
    }

}
student.exam();