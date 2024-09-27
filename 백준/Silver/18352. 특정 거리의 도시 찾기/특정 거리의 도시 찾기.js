function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  const [n, m, k, x] = input[0].split(" ").map(Number); 

  const answer = [];
  
  const distances = Array.from({ length: n + 1 }, () => 300001);
  distances[x] = 0;

  const graph = Array.from({ length: n + 1 }, () => []);

  for (let i = 1; i <= m; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
  }

  const bfs = (currentCity, distance) => {
    if (distance > k || distances[currentCity] < distance) return;

    for (const newCity of graph[currentCity]) {
      bfs(newCity, distance + 1);
    }
    
    distances[currentCity] = distance;
  }

  for (const newCity of graph[x]) {
    bfs(newCity, 1);
  }

  for (let i = 1; i <= n; i++) {
    if (distances[i] === k) answer.push(i);
  }

  if (answer.length === 0) console.log(-1);
  else console.log(answer.join("\n"));
}

solution();