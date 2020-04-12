const createCounter = () => {
    let count = 0

    return {
        increment(){
            count ++
        },
        decrement(){
            count --
        },
        getCount(){
            return count
        }
    }
}
const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.getCount())

// Adder
const createAdder = (a) => {
    return (b) => {
        return a+b
    }
}
const add10 = createAdder(10)
console.log(add10(2))
console.log(add10(-2))
console.log(add10(25))

// Tipper
const createTipper = (tip = 0.15) =>{
    return (billAmount) => {
        return `Your tip amount is ${billAmount * tip}`
    }
}
const tip15 = createTipper(.25)
console.log(tip15(100))
