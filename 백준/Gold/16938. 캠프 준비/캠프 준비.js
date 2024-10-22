function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  let answer = 0;
  
  const [n, l, r, x] = input[0].split(" ").map(Number);
 
  const problems = input[1].split(" ").map(num => [num, 0]);

  const visited = Array.from({length: n}, () => 0);

  const dfs = (index, visited, arr, sum) => {
    if (arr.length >= 2 && visited.filter(node => node === 0).length === 0) {
      const minNum = Math.min(...arr);
      const maxNum = Math.max(...arr);

      if (maxNum - minNum >= x && sum >= l && sum <= r) {
        answer++; 
      }
    }

    if (index === n) return;

    for (const num of problems[index]) {
      visited[index] = 1;
      if (+num !== 0) dfs(index+1, visited, [...arr, +num], sum + +num);
      else dfs(index+1, visited, arr, sum);
      visited[index] = 0;
    }
  }

  dfs(0, visited, [], 0);
  
  console.log(answer);
}

solution();