function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = 0;

  const [n, m] = input[0].split(" ").map(Number);
  
  const numArr = Array(10).fill(false);
  
  if (m !== 0) {
    input[1].split(" ").map(Number).forEach(num => numArr[num] = true);
  }
 
  const findCount = (count, condition) => {
    if (count === n) {
      if (condition === m) answer++;
      return;
    }

    for (let i = 0; i <= 9; i++) {
      if (numArr[i]) {
        numArr[i] = false;
        findCount(count+1, condition+1);
        numArr[i] = true;
      } else {
        findCount(count+1, condition);
      }
    }
  }

  
  findCount(0, 0);
  
  console.log(answer);
}

solution();
