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
// let hand = ["02♣", "03♥", "04♦", "04♠", "12♣"];

const straightRanks = hand.map((hand) => hand.slice(0, -1));
const arrayOfRanksString = [...straightRanks];
const arrayOfRanks = arrayOfRanksString.map(Number);
console.log("Ranks: " + arrayOfRanks);

const flushSuits = hand.map((string) => string.slice(2));
const arrayOfSuits = [...flushSuits];
console.log("Suits: " + arrayOfSuits);

// Check for Flush - 5 kart w tym samym kolorze

function isFlush() {
  colorToCompare = arrayOfSuits[0];
  if (arrayOfSuits.every((element) => element === colorToCompare)) {
    console.log("Flush");
    return true;
  }
}
isFlush(hand);

// Check for Straight - karty po kolei

function isStraight() {
  if (
    arrayOfRanks[0] - arrayOfRanks[1] === -1 &&
    arrayOfRanks[1] - arrayOfRanks[2] === -1 &&
    arrayOfRanks[2] - arrayOfRanks[3] === -1 &&
    arrayOfRanks[3] - arrayOfRanks[4] === -1
  )
    console.log("Straight");
}
isStraight(hand);

// Check for Straight Flush - poker - 5 kart następujących po sobie w tym samym kolorze

function isStraightFlush() {
  if (isStraight() && isFlush()) {
    console.log("Straight Flush");
    return true;
  }
}
isStraightFlush(hand);

// Check for Royal Flush

function isRoyalFlush() {
  const valueOfranks = arrayOfRanks.reduce((a, b) => a + b);
  if (isStraightFlush() && valueOfranks == 60) {
    console.log("Royal Flush dfdf");
  }
}
isRoyalFlush(hand);

// Check for Four of a kind

function isFourOfAKind() {
  if (
    arrayOfRanks[0] === arrayOfRanks[3] ||
    arrayOfRanks[1] === arrayOfRanks[4]
  ) {
    console.log("Four of a kind");
    return true;
  }
}
isFourOfAKind(hand);

// Check for Three of a kind

function isThreeOfAKind() {
  if (
    arrayOfRanks[0] === arrayOfRanks[2] ||
    arrayOfRanks[1] === arrayOfRanks[3] ||
    arrayOfRanks[2] === arrayOfRanks[4]
  ) {
    console.log("Three of a kind");
    return true;
  }
}
isThreeOfAKind(hand);

// Check for Full house

function isFullHouse() {
  if (
    (arrayOfRanks[0] === arrayOfRanks[2] &&
      arrayOfRanks[3] === arrayOfRanks[4]) ||
    (arrayOfRanks[0] === arrayOfRanks[1] && arrayOfRanks[2] === arrayOfRanks[4])
  ) {
    console.log("Full house");
    return true;
  }
}
isFullHouse(hand);

function isTwoPairs() {
  if (
    (arrayOfRanks[0] === arrayOfRanks[1] &&
      arrayOfRanks[2] === arrayOfRanks[3] &&
      arrayOfRanks[3] !== arrayOfRanks[4]) ||
    (arrayOfRanks[1] === arrayOfRanks[2] &&
      arrayOfRanks[3] === arrayOfRanks[4] &&
      arrayOfRanks[0] !== arrayOfRanks[1])
  ) {
    console.log("Two pairs");
    return true;
  }
}
isTwoPairs(hand);

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
    console.log("One pair");
    return true;
  }
}
isOnePair(hand);

function isHighCard() {
  if (
    arrayOfRanks[0] !== arrayOfRanks[1] &&
    arrayOfRanks[1] !== arrayOfRanks[2] &&
    arrayOfRanks[2] !== arrayOfRanks[3] &&
    arrayOfRanks[3] !== arrayOfRanks[4]
  ) {
    console.log("High Card");
    return true;
  }
}
isHighCard(hand);

// Function to determine the best poker hand

// function determineBestPokerHand(hand) {}

// determineBestPokerHand(hand);
