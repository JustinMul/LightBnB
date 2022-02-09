let reverseString = '';
for (let i = 2; i < process.argv.length; i++) {
  for (let j = process.argv[i].length - 1; j >= 0; j--) {
    reverseString += process.argv[i][j];
  }
  console.log(reverseString);
  reverseString = '';
}