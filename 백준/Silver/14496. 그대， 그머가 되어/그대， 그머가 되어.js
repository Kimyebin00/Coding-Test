function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const [a, b] = input[0].split(" ").map(Number);
  const [n, m] = input[1].split(" ").map(Number);

  let answer = n;

  const graph = Array.from({length: n+1}, () => []);

  for (let i = 2; i <= m+1; i++) {
    const [a, b] = input[i].split(" ").map(Number);

    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = Array(n+1).fill(0);
  const nodes = [[a, 0]];

  visited[a] = 1;

  while (nodes.length) {
    let [currentNode, count] = nodes.shift();

    if (currentNode === b) answer = Math.min(answer, count);
    
    for (const nextNode of graph[currentNode]) {
      if (!visited[nextNode]) {
        visited[nextNode] = 1;
        nodes.push([nextNode, count+1]);
      }
    }
  }

  if (answer === n) answer = -1;
  
  console.log(answer);

}

solution();