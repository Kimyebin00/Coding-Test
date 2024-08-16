function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = [];

  const n = parseInt(input[0]);

  const graph = {};

  for (let i = 1; i <= n; i++) {
    let [a, b] = input[i].split(" is ");

    if (graph[a] === undefined) {
      graph[a] = [b];
    } else {
      graph[a] = [...graph[a], b];
    }
  }

  const m = parseInt(input[n+1]);

  let ok = 'F';

  const dfs = (a, b) => {
    for (const b_ of graph[a]) {
      if (b_ === b) return ok = 'T';

      if (graph[b_] !== undefined) {
        dfs(b_, b);
      }
    }
  }
  for (let i = n+2; i < n + m + 2; i++) {
    let [a, b] = input[i].split(" is ");

    if (graph[a] !== undefined) {
      dfs(a, b);
      answer.push(ok);

      ok = 'F';
    } else {
      answer.push(ok);
    }
  }
 

  console.log(answer.join("\n"));
}

solution();
