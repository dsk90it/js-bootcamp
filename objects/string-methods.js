let isValidPassword = (pwd) => {
    let invalidString = 'password'
    return pwd.length > 8 && !pwd.includes(invalidString) 
}

console.log(isValidPassword('Senthil')); // false
console.log(isValidPassword('Senthil@2020')); // true
console.log(isValidPassword('Senthil@2020_password')); // false