function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = [];

  const n = +input[0];
  const numArr = input[1].split(" ").map(Number);

  let count = 1;
  for (let i = 0 ; i < n - 1; i++) {
    const ai = numArr[i];
    const aj = numArr[i+1];
    
    if (ai === aj) {
      count++;
    } else {
      answer.push(...Array(count).fill(i+2));
      count = 1;
    }
  }

  if (count > 1) {
    answer.push(...Array(count).fill(-1));
  } else {
    answer.push(-1);
  }

  console.log(answer.join(" "));
}

solution();