const suits = ["♠", "♥", "♦", "♣"];
const ranks = [
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
];
//            ["11" = J , "12" = Q, "13" = K , "14" = A];

// Function to create a standard 52-card deck (no wild cards)
function createDeck() {
  const deck = [];
  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push(rank + suit);
    }
  }
  return deck;
}
let deck = createDeck();

// Function to get a random card from the deck
function getRandomCard(deck) {
  const randomIndex = Math.floor(Math.random() * deck.length);
  return deck.splice(randomIndex, 1)[0];
}

// Deal 5 random cards
let unsortedHand = [];
for (let i = 0; i < 5; i++) {
  unsortedHand.push(getRandomCard(deck));
}
let hand = unsortedHand.sort();
console.log(`Hand: ${unsortedHand}`);

// hand for testing:
// let hand = ["10♥", "11♠", "12♥", "13♥", "14♥"];

const straightRanks = hand.map((hand) => hand.slice(0, -1));
const arrayOfRanksString = [...straightRanks];
const arrayOfRanks = arrayOfRanksString.map(Number);
console.log("Ranks: " + arrayOfRanks);

const flushSuits = hand.map((string) => string.slice(2));
const arrayOfSuits = [...flushSuits];
console.log("Suits: " + arrayOfSuits);

// Check for Flush (5 kart w tym samym kolorze)
function isFlush() {
  colorToCompare = arrayOfSuits[0];
  if (arrayOfSuits.every((element) => element === colorToCompare)) {
    return true;
  }
}

// Check for Straight (karty po kolei)
function isStraight() {
  if (
    arrayOfRanks[0] - arrayOfRanks[1] === -1 &&
    arrayOfRanks[1] - arrayOfRanks[2] === -1 &&
    arrayOfRanks[2] - arrayOfRanks[3] === -1 &&
    arrayOfRanks[3] - arrayOfRanks[4] === -1
  )
    return true;
}

// Check for Straight Flush - poker (5 kart następujących po sobie w tym samym kolorze)
function isStraightFlush() {
  if (isStraight() && isFlush()) {
    return true;
  }
}

function isRoyalFlush() {
  const valueOfranks = arrayOfRanks.reduce((a, b) => a + b);
  if (isStraightFlush() && valueOfranks == 60) {
    return true;
  }
}

function isFourOfAKind() {
  if (
    arrayOfRanks[0] === arrayOfRanks[3] ||
    arrayOfRanks[1] === arrayOfRanks[4]
  ) {
    return true;
  }
}

function isThreeOfAKind() {
  if (
    arrayOfRanks[0] === arrayOfRanks[2] ||
    arrayOfRanks[1] === arrayOfRanks[3] ||
    arrayOfRanks[2] === arrayOfRanks[4]
  ) {
    return true;
  }
}

function isFullHouse() {
  if (
    (arrayOfRanks[0] === arrayOfRanks[2] &&
      arrayOfRanks[3] === arrayOfRanks[4]) ||
    (arrayOfRanks[0] === arrayOfRanks[1] && arrayOfRanks[2] === arrayOfRanks[4])
  ) {
    return true;
  }
}

function isTwoPairs() {
  if (
    (arrayOfRanks[0] === arrayOfRanks[1] &&
      arrayOfRanks[2] === arrayOfRanks[3] &&
      arrayOfRanks[3] !== arrayOfRanks[4]) ||
    (arrayOfRanks[1] === arrayOfRanks[2] &&
      arrayOfRanks[3] === arrayOfRanks[4] &&
      arrayOfRanks[0] !== arrayOfRanks[1])
  ) {
    return true;
  }
}

function isOnePair() {
  if (
    (arrayOfRanks[0] === arrayOfRanks[1] &&
      arrayOfRanks[1] !== arrayOfRanks[2] &&
      arrayOfRanks[2] !== arrayOfRanks[3] &&
      arrayOfRanks[3] !== arrayOfRanks[4]) ||
    (arrayOfRanks[0] !== arrayOfRanks[1] &&
      arrayOfRanks[1] === arrayOfRanks[2] &&
      arrayOfRanks[2] !== arrayOfRanks[3] &&
      arrayOfRanks[3] !== arrayOfRanks[4]) ||
    (arrayOfRanks[0] !== arrayOfRanks[1] &&
      arrayOfRanks[1] !== arrayOfRanks[2] &&
      arrayOfRanks[2] === arrayOfRanks[3] &&
      arrayOfRanks[3] !== arrayOfRanks[4]) ||
    (arrayOfRanks[0] !== arrayOfRanks[1] &&
      arrayOfRanks[1] !== arrayOfRanks[2] &&
      arrayOfRanks[2] !== arrayOfRanks[3] &&
      arrayOfRanks[3] === arrayOfRanks[4])
  ) {
    return true;
  }
}

function checkHandConfiguration() {
  if (isRoyalFlush(hand)) {
    console.log("Royal flush");
  } else if (isStraightFlush(hand)) {
    console.log("Straight flush");
  } else if (isStraight(hand)) {
    console.log("Straight");
  } else if (isFlush(hand)) {
    console.log("Flush");
  } else if (isFourOfAKind(hand)) {
    console.log("Four of a kind");
  } else if (isThreeOfAKind(hand)) {
    console.log("Three of a kind");
  } else if (isFullHouse(hand)) {
    console.log("Full house");
  } else if (isTwoPairs(hand)) {
    console.log("Two pairs");
  } else if (isOnePair(hand)) {
    console.log("One pair");
  } else {
    console.log("High card");
  }
}

checkHandConfiguration();
