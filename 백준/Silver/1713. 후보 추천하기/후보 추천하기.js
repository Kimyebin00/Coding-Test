function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const n = +input[0];

  const totalCnt = +input[1];

  const numbers = input[2].split(" ").map(num => +num - 1);

  let stack = [];

  const cntArr = Array(100).fill(0);

  for (const num of numbers) {
    if (stack.length < n) {
      if (stack.includes(num)) {
        cntArr[num] += 1;
      } else {
        stack.push(num);
        cntArr[num] += 1;
      }
    } else {
      if (stack.includes(num)) {
        cntArr[num] += 1;
        continue;
      }

      let minCnt = 1000;

      for (let i = 0; i < n; i++) {
        minCnt = Math.min(minCnt, cntArr[stack[i]]);
      }

      if (stack.filter(n => cntArr[n] === minCnt).length === 1) {
        stack = stack.filter(n => cntArr[n] !== minCnt);
        cntArr[cntArr.indexOf(minCnt)] = 0;
      } else {
        for (let i = 0; i < n; i++) {
          if (cntArr[stack[i]] === minCnt) {
            cntArr[stack[i]] = 0;
            stack = stack.filter(n => n !== stack[i]);
            break;
          }
        }
      }

      stack.push(num);
      cntArr[num] += 1;
    }
  }

  stack = stack.map(num => num + 1);
  stack.sort((a,b) => a - b);

  console.log(stack.join(" "));
}

solution();