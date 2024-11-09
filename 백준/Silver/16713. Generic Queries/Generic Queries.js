function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const [n, q] = input[0].split(" ").map(Number);

  const numbers = input[1].split(" ").map(Number);

  const xorArr = Array.from({length: n}, () => 0);

  xorArr[0] = numbers[0];
  
  for (let i = 1; i < n; i++) {
    xorArr[i] = xorArr[i-1] ^ numbers[i];
  }

  const qArr = [];
  for (let i = 2; i < 2 + q; i++) {
    qArr.push(input[i].split(" ").map(num => +num - 1));
  }

  qArr.sort((a,b) => a[0]-b[0]);

  let answer;

  for (let i = 0; i < q; i++) {
    const [s, e] = qArr[i];

    if (s === e) {
      if (answer === undefined) answer = numbers[e];
      else answer = answer ^ numbers[e];
    }
    else if (s === 0) answer = answer ^ xorArr[e];
    else answer = answer ^ xorArr[e] ^ xorArr[s-1];
  }

  console.log(answer);
}

solution();