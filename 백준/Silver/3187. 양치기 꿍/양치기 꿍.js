function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = [0, 0];

  let group = [];
  const [R, C] = input[0].split(" ").map(Number);

  const direction = [[-1,0], [1,0], [0,-1], [0,1]];

  const graph = [];

  for (let i = 1; i <= R; i++) {
    graph.push(input[i].split(""));
  }

  let v = 0;
  let k = 0;

  const dfs = (startNodeX, startNodeY) => {
    for (const [x, y] of direction) {
      let newX = startNodeX + x;
      let newY = startNodeY + y;
      

      if (newX >= 0 && newX < R && newY >= 0 && newY < C) {
        if (graph[newX][newY] === '.') {
          graph[newX][newY] = '-';
          dfs(newX, newY);
        } else if (graph[newX][newY] === 'v') {
          graph[newX][newY] = '-';
          v++;
          dfs(newX, newY);
        } else if (graph[newX][newY] === 'k') {
          graph[newX][newY] = '-';
          k++;
          dfs(newX, newY);
        }
      }
    }
  }

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (graph[i][j] === '.') {
        graph[i][j] = '-';
        dfs(i, j);
        group.push([v, k]);
      } else if (graph[i][j] === 'v') {
        graph[i][j] = '-';
        v++;
        dfs(i, j);
        group.push([v, k]);
      } else if (graph[i][j] === 'k') {
        graph[i][j] = '-';
        k++;
        dfs(i, j);
        group.push([v, k]);
      }
      v = 0;
      k = 0;
    }
  }

  for (let i = 0; i < group.length; i++) {
    let vCount = group[i][0];
    let kCount = group[i][1];

    if (kCount > vCount) {
      answer[0] += kCount;
    } else {
      answer[1] += vCount;
    }
  }

  console.log(answer.join(" "));
}

solution();


