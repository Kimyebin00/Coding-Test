function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const n = +input[0];
  const stack = [];
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (input[i] !== '0') {
      stack.push(input[i]);
      answer += +input[i];
    } else {
      answer -= +stack.pop();
    }
  }

  console.log(answer);
}

solution();