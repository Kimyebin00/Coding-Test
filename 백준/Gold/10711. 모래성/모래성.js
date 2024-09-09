function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = 0;

  const [h, w] = input[0].split(" ").map(Number);
  
  const sandCastle = [];

  const direction = [[-1,0], [-1,1], [0,1], [1,1], [1,0], [1,-1], [0,-1], [-1,-1]];

  for (let i = 1; i <= h; i++) {
    sandCastle.push(input[i].split(""));
  }

  const willCollapse = Array.from({length: h}, () => Array(w).fill(false));

  let deleteSand = [];

  const countNear = (r, c) => {
    let count = 0;

    for (const [x, y] of direction) {
      let newX = x + r;
      let newY = y + c;

      if (newX >= 0 && newX < h && newY >= 0 && newY < w) {
        let newSand = sandCastle[newX][newY];
        
        if (newSand === '.') count++;
      }
    }

    return count;
  };

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      let checkedSand = sandCastle[i][j];

      if (checkedSand === '.' || checkedSand === '9') continue;

      if (countNear(i, j) >= checkedSand) deleteSand.push([i,j]);
    }
  }

  while (deleteSand.length !== 0) {
    const deleteSandLen = deleteSand.length;

    for (let i = 0; i < deleteSandLen; i++) {
      const [r, c] = deleteSand.shift();

      sandCastle[r][c] = '.';

      for (const [x, y] of direction) {
        let newX = x + r;
        let newY = y + c;

        if (newX >= 0 && newX < h && newY >= 0 && newY < w) {
          if (willCollapse[newX][newY]) continue;

          let checkedSand = sandCastle[newX][newY];

          if (checkedSand === '.' || checkedSand === '9') continue;

          if (countNear(newX, newY) >= checkedSand) {
            willCollapse[newX][newY] = true;
            deleteSand.push([newX, newY]);
          }
        }

      }
    }
    
    answer++;
  }
  

  console.log(answer);
}

solution();
