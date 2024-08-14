function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = "";

  const [m, n] = input[0].split(" ").map(Number);

  const graph = [];

  for (let i = 1; i <= m; i++) {
    graph.push(input[i].split("").map(Number));
  }

  const direction = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  const dfs = (startNodeX, startNodeY) => {
    for (const [x, y] of direction) {
      let newX = startNodeX + x;
      let newY = startNodeY + y;

      if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
        if (!graph[newX][newY]) {
          graph[newX][newY] = 2;
          dfs(newX, newY);
        }
      }
      
    } 
  }

  for (let i = 0; i < n; i++) {
    if (!graph[0][i]) {
      dfs(0, i);
    }
  }

  answer = (graph[m-1].includes(2)) ? "YES" : "NO";

  console.log(answer);
}

solution();
