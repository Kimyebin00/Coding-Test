function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  const [a, b] = input[0].split(" ").map(Number);

  let answer = Infinity;

  const bfs = (num, depth) => {
    if (+num === b) answer = depth;
    if (answer < depth || +num > b) return;

    bfs(+num * 2, depth + 1);
    bfs(num + '1', depth + 1);
  };

  bfs(a, 1);

  if (answer === Infinity) answer = -1;
  console.log(answer);
}

solution();