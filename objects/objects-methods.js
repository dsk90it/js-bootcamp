let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    seatParty: function (addCount) {
        this.guestCount =  this.guestCount + addCount
    },
    removeParty: function (removeCount) {
        this.guestCount =  this.guestCount - removeCount
    },
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    }
}

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));

restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));