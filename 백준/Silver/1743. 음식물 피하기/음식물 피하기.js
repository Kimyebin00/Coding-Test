function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = [];

  const direction = [[-1,0],[1,0],[0,-1],[0,1]];

  const [N, M, K] = input[0].split(" ").map(Number);

  const graph = [];

  for (let i = 0; i < N; i++) {
    graph.push(Array(M).fill(false));
  }

  for (let i = 1; i <= K; i++) {
    let [r, c] = input[i].split(" ").map(Number);

    graph[r-1][c-1] = true;
  }

  let count = 1;
  const dfs = (startX, startY) => {
    for (const [x, y] of direction) {
      let newX = startX + x;
      let newY = startY + y;

      if (newX >= 0 && newX < N && newY >= 0 && newY < M) {
        if (graph[newX][newY]) {
          count++;
          graph[newX][newY] = false;
          dfs(newX, newY);
        }
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j]) {
        graph[i][j] = false;
        dfs(i, j);
        answer.push(count);
        count = 1;
      }
    }
  }

  console.log(Math.max(...answer));
}

solution();
