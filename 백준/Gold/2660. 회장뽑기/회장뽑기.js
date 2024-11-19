function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const n = +input[0];
  
  const graph = Array.from({length: n+1}, () => []);

  let index = 1;

  while (true) {
    const [a,b] = input[index++].split(" ").map(Number);

    if (a === -1) break;

    graph[a].push(b);
    graph[b].push(a);
  }

  let minScore = n;
  const scores = [];

  for (let i = 1; i <= n; i++) {
    if (graph[i].length === n-1) {
      minScore = 1;
      scores.push(1);
      continue;
    }

    const visited = Array.from({length: n+1}, () => 0);
    visited[i] = 1;

    const nodes = [[i, 0]];

    while (nodes.length) {
      const [currentNode, currentScore] = nodes.shift();

      if (currentScore > minScore) {
        scores.push(n);
        break;
      }

      for (const nextNode of graph[currentNode]) {
        if (!visited[nextNode]) {
          visited[nextNode] = 1;
          nodes.push([nextNode, currentScore+1]);
        }
      }

      if (visited.filter(node => node === 1).length === n) {
        const score = nodes.pop()[1];
        scores.push(score);
        minScore = Math.min(minScore, score);
        break;
      }
    }
  }

  const candidates = [];

  for (let i = 0; i < n; i++) {
    if (scores[i] === minScore) candidates.push(i+1);
  }

  console.log(minScore + " " + candidates.length);
  console.log(candidates.join(" "));
}

solution();