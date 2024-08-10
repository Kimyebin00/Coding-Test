function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = "";

  const n = parseInt(input[0]);
  const line = parseInt(input[1]);

  const graph = [[]];

  for (let i = 0; i < n; i++) {
    graph.push([]);
  }

  for (let i = 2; i <= line + 1; i++) {
    let lineInfo = input[i].split(" ");
    graph[parseInt(lineInfo[0])].push(parseInt(lineInfo[1]));
    graph[parseInt(lineInfo[1])].push(parseInt(lineInfo[0]));
  }

  const visited = [];
  let nodes = [1];

  while (nodes.length !== 0) {
    let currentNode = nodes.shift();

    if (!visited.includes(currentNode)) {
      visited.push(currentNode);
      nodes = [...graph[currentNode], ...nodes];
    }
  }

  console.log(visited.length - 1);
}

solution();
