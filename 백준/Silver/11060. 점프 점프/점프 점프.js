function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  const n = +input[0];

  const maze = input[1].split(" ").map(Number);

  const countArr = Array.from({length : n}, (_,i) => i);
  const visited = Array(n).fill(0);

  visited[0] = 1;
  for (let i = 0; i < n - 1; i++) {
    if (!visited[i]) continue;

    for (let j = i+1; j <= i + maze[i]; j++) {
      if (j === n) break;
      visited[j] = 1;

      if (visited[j]) countArr[j] = Math.min(countArr[j], countArr[i] + 1);
    }
  }

  if (!visited[n-1]) console.log(-1);
  else console.log(countArr[n-1]);
}

solution();