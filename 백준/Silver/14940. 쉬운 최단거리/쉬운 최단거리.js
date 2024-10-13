function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const [n, m] = input[0].split(" ").map(Number);
  const answer = Array.from({length: n}, () => Array.from({length: m}, () => -1));

  const direction = [[-1,0], [1, 0], [0,-1], [0,1]];

  const graph = [];

  let endPoint;

  for (let i = 1; i <= n; i++) {
    const row = input[i].split(" ").map(Number);

    for (let j = 0; j < m; j++) {
      if (row[j] === 0) answer[i-1][j] = 0;
      if (row[j] === 2) endPoint = [i-1, j];
    }

    graph.push(row);
  }

  const visited = Array.from({length: n}, () => Array.from({length: m}, () => 0));
  const nodes = [[endPoint[0], endPoint[1], 0]];

  visited[endPoint[0]][endPoint[1]] = 1;

  while (nodes.length) {
    const [currentX, currentY, cnt] = nodes.shift();
    answer[currentX][currentY] = cnt;

    for (const [x, y] of direction) {
      const [newX, newY] = [currentX + x, currentY + y];

      if (newX >= 0 && newX < n && newY >= 0 && newY < m && !visited[newX][newY]) {
        if (graph[newX][newY]) {
          visited[newX][newY] = 1;
          nodes.push([newX, newY, cnt + 1]);
        } 
      }
    }
  }


  for (let i = 0; i < n; i++) {
    console.log(answer[i].join(' '));
  }
  
}

solution();