function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const [n, k] = input[0].split(" ").map(Number);

  const answer = [];

  let numArr = Array.from({length: n}, (_, i) => i+1);

  let idx = -1;

  while (numArr.length) {
    idx += k;

    if (idx < numArr.length) {
      answer.push(numArr[idx]);
      numArr = [...numArr.slice(0, idx), ...numArr.slice(idx + 1)];
      idx--;
    } else {
      while (idx >= numArr.length) {
        idx -= numArr.length;
      }
      
      answer.push(numArr[idx]);
      numArr = [...numArr.slice(0, idx), ...numArr.slice(idx + 1)];
      idx--;
    }
  }

  console.log('<' + answer.join(', ') + '>');
  
}

solution();