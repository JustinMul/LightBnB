// alternative solution using regex
// const obfuscate = function(consoleInput) {
//   let password = String(consoleInputTrim(consoleInput));
//   password = password.replace(/([a])/g,'4');
//   password = password.replace(/([e])/g,'3');
//   password = password.replace(/([o])/g,'0');
//   password = password.replace(/([l])/g,'1');
//   return password;
// };


const obfuscate = function(consoleInput) {
  let password = consoleInputTrim(consoleInput);
  let obfuscatePass = '';

  for (let i = 0; i < password.length; i++) {
    switch (password[i]) {
    case 'a':
      obfuscatePass += '4';
      break;
    case 'e':
      obfuscatePass += '3';
      break;
    case 'o':
      obfuscatePass += '0';
      break;
    case 'l':
      obfuscatePass += '1';
      break;
    default:
      obfuscatePass += password[i];
    }
  }

  return obfuscatePass;
};

const consoleInputTrim = function(inputFromConsole) {
  let trimArray = String(inputFromConsole.slice(2));
  return trimArray;
};

console.log(obfuscate(process.argv));