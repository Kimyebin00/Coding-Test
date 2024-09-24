function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = 0;

  const n = +input[0];
  let times = [];

  for (let i = 1; i <= n; i++) {
    times.push(input[i].split(" ").map(Number));
  }

  times.sort((a,b) => a[0] - b[0]);

  for (const [arrivalTime, checkTime] of times) {
    if (answer <= arrivalTime) answer = arrivalTime;
    
    answer += checkTime;
  }

  console.log(answer);
}

solution();