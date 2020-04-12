let isGuestOneVegan = false
let isGuestTwoVegan = false

isGuestOneVegan && isGuestTwoVegan ? console.log('Both are vegan. Only offer vegan dishes') 
:
isGuestOneVegan || isGuestTwoVegan ? console.log('Atleast one vegan? Make sure to offer up some vegan options')
:
console.log('Else, Offer up anything on the menu');
