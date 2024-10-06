function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const n = +input[0];

  const moneyArr = Array.from({length: n+1}, (_,i) => i);

  moneyArr[1] = -1;

  let answer = Infinity;

  for (let i = 0; i < Math.floor(n/5); i++) {
    let currentMoney = n - 5*(i+1);

    if (currentMoney % 2 === 0) {
      answer = Math.min(answer, i+1 + currentMoney/2);
    }
  }
  
  if (answer === Infinity) {
    if (n % 2 === 0) answer = n/2;
    else answer = -1;
  }

  console.log(answer);
}

solution();