const displayCards = require('../index');

const cards = [{
    origin: 'B',
    destination: 'C',
    type: 'flight',
    flightNum: '123',
    gate: '2A',
    seat: '3',
    baggageAutoTransfer: true,
}, {
    origin: 'A',
    destination: 'B',
    type: 'flight',
    flightNum: '456',
    gate: '1A',
    seat: '1',
    baggageCounter: 2,
}, {
    origin: 'C',
    destination: 'D',
    type: 'train',
    trainNum: '11',
    seat: '10',
}];

if (displayCards(cards) !== `- From A, take flight 456 to B. Gate 1A, seat 1. Baggage drop at ticket counter 2.
- From B, take flight 123 to C. Gate 2A, seat 3. Baggage will be automatically transferred from your last leg.
- Take train 11 from C to D. Sit in seat 10.
- You have arrived at your final destination.`) {
    throw new Error('Test failed');
};

console.log('Test pass');
