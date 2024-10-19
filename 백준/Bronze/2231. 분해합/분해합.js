function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
 
  const num = +input[0];

  let answer = 0;
  for (let i = 1; i < num; i++) {
    let splittedI = (i + "").split("");
    let sum = i;
    
    for (const splittedNum of splittedI) {
      sum += +splittedNum;
    }

    if (sum === num) {
      answer = i;
      break;
    }
  }

  console.log(answer);
}

solution();