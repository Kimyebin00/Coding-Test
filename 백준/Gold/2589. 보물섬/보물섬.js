function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const [n, m] = input[0].split(" ").map(Number);

  let answer = [];

  const direction = [[-1,0],[1,0],[0,-1],[0,1]];

  const island = [];

  for (let i = 1; i <= n; i++) {
    island.push(input[i].split(""));
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (island[i][j] === 'W') continue;

      //if (!visited[i][j]) {
        const visited = Array.from({length: n}, () => Array.from({length: m}, () => 0));
        const nodes = [[i, j, 0]];

        visited[i][j] = 1;

        while (nodes.length) {
          const [currentX, currentY, cnt] = nodes.shift();

          let possible = false;
          for (const [x, y] of direction) {
            const [newX, newY] = [currentX + x, currentY + y];

            if (newX >= 0 && newX < n && newY >= 0 && newY < m && island[newX][newY] === 'L' && !visited[newX][newY]) {
              possible = true;
              visited[newX][newY] = 1;
              nodes.push([newX, newY, cnt + 1]);
            }
          }

          if (!nodes.length) { 
            answer.push(cnt)
            //answer = Math.max(answer, cnt);
          }
        }
     //}

    }
  }

  console.log(Math.max(...answer));
}

solution();