function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const [n, m] = input[0].split(" ").map(Number);

  const snowList = input[1].split(" ").map(Number);

  let maxSnow = 0;
  const dfs = (currentSnow, index, count) => {
    if (count === m) return maxSnow = Math.max(maxSnow, currentSnow);
    
    if (index + 1 < n) dfs(currentSnow + snowList[index + 1], index + 1, count + 1);
    else return maxSnow = Math.max(maxSnow, currentSnow);

    if (index + 2 < n) dfs(Math.floor(currentSnow/2) + snowList[index+2], index + 2, count + 1);
    else return maxSnow = Math.max(maxSnow, currentSnow);
  }

  dfs(1, -1, 0);

  console.log(maxSnow);
}

solution();