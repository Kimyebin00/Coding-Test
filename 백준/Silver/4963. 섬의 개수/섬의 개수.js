function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = [];

  const direction = [[-1, 0], [-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1]];

  const bfs = (graph, width, height, currentX, currentY) => {
    if (graph[currentX][currentY]) {
      graph[currentX][currentY] = 0;
      for (const [x, y] of direction) {
        let newX = currentX + x;
        let newY = currentY + y;

        if ((newX >= 0 && newX < height) && (newY >= 0 && newY < width)) {
          bfs(graph, width, height, newX, newY);
        }
      }
    }
  };

  for (let i = 0; i < input.length-1; i++) {
    let [w, h] = input[i].split(" ").map(Number);
    let count = 0;

    const graph = [];
    for (let j = i+1; j < i + 1 + h; j++) {
      graph.push(input[j].split(" ").map(Number));
    }

    for (let j = 0; j < h; j++) {
      for (let k = 0; k < w; k++) {
        if (graph[j][k]) {
          bfs(graph, w, h, j, k);
          count++;
        }
      }
    }
    i += h;

    
    answer.push(count);
  }

  console.log(answer.join("\n"));
}

solution();
