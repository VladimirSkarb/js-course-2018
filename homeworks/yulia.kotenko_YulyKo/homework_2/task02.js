const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('final nomber (0; 10000] ', (answer) => {
     for (let i = 0; i < answer; i++) {
      let newNumber = i.toString().split('').reverse().join('');
       let rev = i.toString();
       if (newNumber === rev) {
         console.log(i);
       }
     }
    rl.close();
});