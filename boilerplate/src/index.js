const printTeam = (team, coach, ...players) => {
    return `TEAM: ${team} || COACH: ${coach} || ${players.join(', ')}`
}
const teamObj = {
    name: 'Liberty',
    coach: 'Casey Penn',
    players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}
console.log(printTeam(teamObj.name, teamObj.coach, ...teamObj.players))

let cities = ['Coimbatore', 'Chennai', 'Andhra']
cities = [...cities, 'Bengaluru']

console.log(cities)
