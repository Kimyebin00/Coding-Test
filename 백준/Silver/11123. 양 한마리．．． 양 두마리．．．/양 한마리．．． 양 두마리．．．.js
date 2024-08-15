function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = [];

  const n = parseInt(input[0]);

  const direction = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  let index = 1;
  for (let i = 0; i < n; i++) {
    let [h, w] = input[index].split(" ").map(Number);

    let graph = [];

    for (let j = index + 1; j <= h + index; j++) {
      graph.push(input[j].split(""));
    }

    const dfs = (startNodeX, startNodeY) => {
      for (const [x, y] of direction) {
        let newX = startNodeX + x;
        let newY = startNodeY + y;

        if (newX >= 0 && newX < h && newY >= 0 && newY < w) {
          if (graph[newX][newY] === '#') {
            graph[newX][newY] = '-';
            dfs (newX, newY);
          }
        }
      }
    }
    let count = 0;
    for (let j = 0; j < h; j++) {
      for (let k = 0; k < w; k++) {
        if (graph[j][k] === '#') {
          dfs(j, k);
          count++;
        }
      }
    }

    index += h + 1;

    answer.push(count);
  }
  
  console.log(answer.join("\n"));
}

solution();
