function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = 0;

  const n = parseInt(input[0]);

  const rocks = input[1].split(" ").map(Number);

  const startNode = parseInt(input[2])-1;

  const dfs = (startNode) => {
    let distance = rocks[startNode];

    if(distance !== 0) {
      rocks[startNode] = 0;
      answer++;

      if (startNode - distance >= 0) {
        dfs(startNode-distance);
      }

      if (startNode + distance < n) {
        dfs(startNode+distance);
      }
    }
  }

  dfs(startNode);

  console.log(answer);
}

solution();
