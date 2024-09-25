function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  const [n, k] = input[0].split(" ").map(Number);
  const speeds = input[1].split(" ").map(Number);

  let answer = Infinity;

  speeds.sort((a,b) => a-b);
  
  for (let i = 1; i < n; i++) {
    let teamASpeed = speeds[0] * i;
    let teamBSpeed = speeds[i] * (n-i);

    let totalTime;
    if (k % (teamASpeed + teamBSpeed) === 0) {
      totalTime = k / (teamASpeed + teamBSpeed);
    } else {
      totalTime = Math.floor(k / (teamASpeed + teamBSpeed)) + 1;
    }

    answer = Math.min(answer, totalTime);
  }

  console.log(answer);
}

solution();