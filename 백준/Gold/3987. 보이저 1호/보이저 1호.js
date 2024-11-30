function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const [n, m] = input[0].split(" ").map(Number);
  const [pr, pc] = input[n+1].split(" ").map(num => +num-1);

  const universe = [];

  for (let i = 1; i <= n; i++) {
    universe.push(input[i].split(""));
  }

  const direction = [[-1,0,'U'], [0,1,'R'], [1,0,'D'], [0,-1,'L']];

  let answerDir;
  let answerCnt = 0;

  for (const dir of direction) {
    let [x, y, startDir] = dir;
    let cnt = 1;
    let [currentX, currentY] = [pr + x, pc + y];
    let currentDir = startDir;

    while (true) {
      if (currentX < 0 || currentX >= n || currentY < 0 || currentY >= m) {
        if (answerCnt < cnt) {
          answerDir = startDir;
          answerCnt = cnt;
        }
  
        break;
      }
  
      if (pr === currentX && pc === currentY && startDir === currentDir) {
        answerDir = startDir;
        answerCnt = 'Voyager';
        
        break;
      }
  
      if (universe[currentX][currentY] === 'C') {
        if (answerCnt < cnt) {
          answerDir = startDir;
          answerCnt = cnt;
        }
  
        break;
      } else if (universe[currentX][currentY] === '/') {
        if (currentDir === 'U') {
          currentDir = direction[1][2];
          x = direction[1][0];
          y = direction[1][1];
        } else if (currentDir === 'D') {
          currentDir = direction[3][2];
          x = direction[3][0];
          y = direction[3][1];
        } else if (currentDir === 'L') {
          currentDir = direction[2][2];
          x = direction[2][0];
          y = direction[2][1];
        } else {
          currentDir = direction[0][2];
          x = direction[0][0];
          y = direction[0][1];
        }
      } else if (universe[currentX][currentY] === '\\') {
        if (currentDir === 'U') {
          currentDir = direction[3][2];
          x = direction[3][0];
          y = direction[3][1];
        } else if (currentDir === 'D') {
          currentDir = direction[1][2];
          x = direction[1][0];
          y = direction[1][1];
        } else if (currentDir === 'L') {
          currentDir = direction[0][2];
          x = direction[0][0];
          y = direction[0][1];
        } else {
          currentDir = direction[2][2];
          x = direction[2][0];
          y = direction[2][1];
        }
      }

      currentX += x;
      currentY += y;
      cnt += 1;
    }

    if (answerCnt === 'Voyager') break;
  }

  console.log(answerDir);
  console.log(answerCnt);
}

solution();