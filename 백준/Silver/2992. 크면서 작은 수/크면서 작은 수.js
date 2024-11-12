function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const n = +input[0];
  const numbers = input[0].split("");

  const possibleNumbers = [];

  let answer = 0;

  const makeNumber = (idx, num) => {
    if (idx.length === numbers.length) return possibleNumbers.push(+num);

    for (let i = 0; i < numbers.length; i++) {
      if (idx.includes(i)) continue;

      makeNumber([...idx, i], num + numbers[i]);
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    makeNumber([i], numbers[i]);
  }
  
  possibleNumbers.sort((a,b) => a-b);

  for (let i = 0; i < possibleNumbers.length; i++) {
    if (possibleNumbers[i] > n) {
      answer = possibleNumbers[i];
      break;
    }
  }

  console.log(answer);
}

solution();