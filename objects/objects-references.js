let myAccount = {
    name: 'Senthil',
    income: 0,
    expenses: 0
}

let updateAccount = function(account, inc, exp){
    return {
        income: account.income + inc,
        expenses: account.expenses + exp,
        balance: (account.income + inc) - (account.expenses + exp)
    }
}

let getValues = updateAccount(myAccount, 500, 40)
console.log(getValues)
