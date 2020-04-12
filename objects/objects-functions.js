let tempConversion = function(farenheit) {
    return{
        farenheit: farenheit,
        celsius: `${(farenheit - 32) * 5 / 9} °C`,
        kelvin: `${(farenheit + 459.67) * 5 / 9} K`
    }
}

let getTemps = tempConversion(32)
console.log(getTemps.celsius);