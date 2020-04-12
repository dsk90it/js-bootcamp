const account = {
    name: 'Senthil',
    income: [],
    expenses: [],
    addIncome: function (description, amount){
        this.income.push({
            description: description,
            amount: amount
        })
    },
    addExpense: function (description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function(){
        let totalIncome = 0
        let totalExpenses = 0
        
        this.expenses.forEach(function(expense){
            return totalExpenses = totalExpenses + expense.amount
        })
        this.income.forEach(function(income){
            return totalIncome = totalIncome + income.amount
        })
        
        let balance = totalIncome - totalExpenses

        return `${this.name} has a balance of $${balance}. $${totalIncome} in Income. $${totalExpenses} in expenses.`
    }
}

account.addExpense('Food', 100)
account.addExpense('Movie', 500)

account.addIncome('Salary', 1000)
account.addIncome('Lottery', 200)

console.log(account.getAccountSummary());