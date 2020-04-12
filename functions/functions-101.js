let farenheitToCelsius = (f) =>{
    let c = (f-32) / 1.8000;
    return c;
    // console.log(`${f}°F => ${c}°C`);
}

let resultOne = farenheitToCelsius(32);
let resultTwo = farenheitToCelsius(68);

console.log(resultOne);
console.log(resultTwo);