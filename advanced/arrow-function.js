const people = [
    {
        name: 'Andrew Mead',
        age: 29
    },
    {
        name: 'Amy',
        age: 22
    },
    {
        name: 'Rachel',
        age: 24
    },
    {
        name: 'Senthil',
        age: 29
    },
]

const age22 = people.find((person) => person.age == 22)
console.log(age22.name);
