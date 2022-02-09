//need a function that takes a single number from command line (need process.argv) which will be a number and rolls that many 6 sided dice

const randomNumGenerator = function() {
  return Math.ceil(Math.random() * 6);
};

const numberOfDice = function(inputFromConsole) {
  let trimArray = Number(inputFromConsole.slice(2));
  return trimArray;
};

const output = function() {
  let randomNumString = [];
  let countOfDice = numberOfDice(process.argv);
  for (let i = 0; i < countOfDice; i++) {
    randomNumString[i] = randomNumGenerator();
  }
  return console.log(`Rolled ${countOfDice} dice: ${randomNumString.join()}`);
};

output();