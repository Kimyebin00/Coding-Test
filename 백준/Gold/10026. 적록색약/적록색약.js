function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = [];

  const n = +(input[0]);

  const direction = [[-1,0],[1,0],[0,-1],[0,1]];

  const rgOKGraph = [];
  const rgNOGraph = [];

  for (let i = 1; i <= n; i++) {
    rgOKGraph.push(input[i].split(""));
    rgNOGraph.push(input[i].split(""));
  }

  const rgOKDfs = (currentX, currentY, color) => {
    for (const [x, y] of direction) {
      let newX = currentX + x;
      let newY = currentY + y;

      if (newX >= 0 && newX < n && newY >= 0 && newY < n) {
        if (rgOKGraph[newX][newY] === color) {
          rgOKGraph[newX][newY] = 0;
          rgOKDfs(newX, newY, color);
        }
      }
    }
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let color = rgOKGraph[i][j];
      if (color) {
        rgOKGraph[i][j] = 0;
        rgOKDfs(i, j, color);
        count++;
      }
    }
  }

  answer.push(count);

  count = 0;

  const rgNODfs = (currentX, currentY, color) => {
    for (const [x, y] of direction) {
      let newX = currentX + x;
      let newY = currentY + y;

      if (newX >= 0 && newX < n && newY >= 0 && newY < n) {
        if (color === 'R' || color === 'G'){
          if (rgNOGraph[newX][newY] === 'R' || rgNOGraph[newX][newY] === 'G') {
            rgNOGraph[newX][newY] = 0;
            rgNODfs(newX, newY, color);
          }
        } else if (color === 'B') {
          if (rgNOGraph[newX][newY] === color) {
            rgNOGraph[newX][newY] = 0;
            rgNODfs(newX, newY, color);
          }
        }
      }
    }
  }
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let color = rgNOGraph[i][j];
      if (color) {
        rgNOGraph[i][j] = 0;
        rgNODfs(i, j, color);
        count++;
      }
    }
  }
  
  answer.push(count);

  console.log(answer.join(" "));
}

solution();
