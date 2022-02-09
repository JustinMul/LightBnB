const translator = function(sentence) {
  let outPut = '';
  let firstLetter = '';
  let cleanedArray = sentence.slice(2);
  
  for (let i = 0; i < cleanedArray.length; i++) {
    for (let j = 1; j < cleanedArray[i].length; j++) {
      firstLetter = cleanedArray[i][0];
      outPut += cleanedArray[i][j];
    }
    outPut += firstLetter + 'ay ';
  
  }
  return outPut;
};

console.log(translator(process.argv));
/*
NON function verions if they want this
let outPut = '';
let firstLetter = '';
let cleanedArray = process.argv.slice(2);

for (let i = 0; i < cleanedArray.length; i++) {
  for (let j = 1; j < cleanedArray[i].length; j++) {
    firstLetter = cleanedArray[i][0];
    outPut += cleanedArray[i][j];
  }
  outPut += firstLetter + 'ay ';

}*/

