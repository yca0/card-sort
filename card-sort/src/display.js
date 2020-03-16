const displayBaggage = (card) => {
    if (card.baggageAutoTransfer) {
        return 'Baggage will be automatically transferred from your last leg';
    }
    return `Baggage drop at ticket counter ${card.baggageCounter}`;
};

const displayFlight = (card) =>
    `From ${card.origin}, take flight ${card.flightNum} to ${card.destination}. Gate ${card.gate}, seat ${card.seat}. ${displayBaggage(card)}.`;

const displayTrain = (card) =>
    `Take train ${card.trainNum} from ${card.origin} to ${card.destination}. Sit in seat ${card.seat}.`;

const displayBus = (card) =>
    `Take the airport bus from ${card.origin} to ${card.destination}. No seat assignment.`;

const displayers = {
    flight: displayFlight,
    train: displayTrain,
    bus: displayBus,
};

const getDisplayer = type => displayers[type];

const display = (card) => getDisplayer(card.type)(card);

module.exports = {
    display,
};
