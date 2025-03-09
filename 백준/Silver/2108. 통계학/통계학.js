function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
  
  const n = +input[0];
  input.shift();

  input.sort((a,b) => a-b);
  const sum = input.reduce((pre, cur) => pre + cur, 0);
  const count = Array(8001).fill(0);

  for (let i = 0; i < n; i++) {
    count[input[i]+4000] = count[input[i]+4000] + 1;
  }
  
  if (Math.round(sum/n) === -0) {
    console.log(0);
  } else {
    console.log(Math.round(sum/n));
  }
  console.log(input[Math.floor(n/2)]);
  if (count.filter(c => c === Math.max(...count)).length === 1) {
    console.log(count.indexOf(Math.max(...count)) - 4000);
  } else {
    count[count.indexOf(Math.max(...count))] = 0;
    console.log(count.indexOf(Math.max(...count)) - 4000);
  }
  console.log(input[n-1] - input[0]);
}

solution();