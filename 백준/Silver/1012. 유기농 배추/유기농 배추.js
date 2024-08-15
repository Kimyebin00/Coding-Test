function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = [];

  const direction = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  const t = parseInt(input[0]);
  let index = 1;

  for (let i = 0; i < t; i++) {
    let [n, m, k] = input[index].split(" ").map(Number);

    let graph = [];

    for (let j = 0; j < n; j++) {
      graph.push(Array(m).fill(false));
    }

    for (let j = index+1; j <= index + k; j++) {
      let [x, y] = input[j].split(" ").map(Number);
      graph[x][y] = true;
    }

    const dfs = (startNodeX, startNodeY) => {
      for (const [x, y] of direction) {
        let newX = startNodeX + x;
        let newY = startNodeY + y;

        if (newX >= 0 && newX < n && newY >= 0 && newY < m) {
          if (graph[newX][newY]) {
            graph[newX][newY] = false;
            dfs(newX, newY);
          }
        }
      }
    }

    let count = 0;
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < m; k++) {
        if (graph[j][k]) {
          graph[j][k] = false;
          dfs(j, k);
          count++;
        }
      }
    }

    answer.push(count);

    index += k + 1;
  }



  console.log(answer.join("\n"));
}

solution();
