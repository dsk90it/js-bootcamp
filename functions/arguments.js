let getTip = (total, tipPercent = 0.2) => {
    let result = total * tipPercent
    return console.log(`A ${tipPercent * 100}% tip on $${total} would be $${result}`);
}

getTip(1000);