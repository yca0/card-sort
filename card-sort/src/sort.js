class Trip {
    constructor(card) {
        this.card = card;
        this.next = null;
    }
    setNext(trip) {
        this.next = trip;
    }
}

const sort = (cards) => {
    if (!cards || cards.length === 0) {
        return [];
    }
    const depMap = {};
    const arrMap = {};
    let head;
    cards.forEach((card) => {
        const trip = new Trip(card);
        if (!head) {
            head = trip;
        }
        depMap[card.origin] = trip;
        arrMap[card.destination] = trip;
        if (depMap[card.destination]) {
            trip.setNext(depMap[card.destination]);
            if (head === depMap[card.destination]) {
                head = trip;
            }
        }
        if (arrMap[card.origin]) {
            arrMap[card.origin].setNext(trip);
        }
    });
    let currentTrip = head;
    const ret = [ head.card ];
    while (currentTrip.next) {
        currentTrip = currentTrip.next;
        ret.push(currentTrip.card);
    }
    return ret;
};

module.exports = { sort };
