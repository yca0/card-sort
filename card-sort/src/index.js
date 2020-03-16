const { sort } = require('./sort');
const { display } = require('./display');

const displayCards = (cards) => {
    const sorted = sort(cards);
    let output = '';
    sorted.forEach((card) => {
        output += `- ${display(card)}\n`;
    });
    output += '- You have arrived at your final destination.';
    return output;
};

module.exports = displayCards;
