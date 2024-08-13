function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = 0;

  const n = parseInt(input[0]);
  const [person1, person2] = input[1].split(" ").map(Number);
  const m = parseInt(input[2]);
  const visited = Array(n+1).fill(false);
  
  const graph = [[]];

  for (let i = 0; i < n; i++) {
    graph.push([]);
  }

  for (let i = 3; i < 3 + m; i++) {
    let [x, y] = input[i].split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }


  const dfs = (startNode, depth) => {
    if (startNode === person2) answer = depth;

    for (const v of graph[startNode]) {
      if (!visited[v]) {
        visited[startNode] = true;
        dfs(v, depth + 1);
      }
    }
  }

  dfs(person1, 0);
  
  if (answer === 0) answer = -1;
  
  console.log(answer);
}

solution();
