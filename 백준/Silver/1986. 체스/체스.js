function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = 0;

  const [n, m] = input[0].split(" ").map(Number);
  
  const queenInfo = input[1].split(" ").map(Number);
  const knightInfo = input[2].split(" ").map(Number);
  const pawnInfo = input[3].split(" ").map(Number);
  
  const chess = [];

  for (let i = 0; i < n; i++) {
    chess.push(Array(m).fill(0));
  }

  const knightDirection = [[-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1]];

  for (let i = 0; i < knightInfo[0]; i++) {
    let currentX = knightInfo[i*2 + 1]-1;
    let currentY = knightInfo[i*2 + 2]-1;
    chess[currentX][currentY] = 1;

    for (const [x, y] of knightDirection) {
      let newX = x + currentX;
      let newY = y + currentY;

      if ((newX >= 0 && newX < n) && (newY >= 0 && newY < m)) {
        if (chess[newX][newY] === 0) chess[newX][newY] = 2;
      }
    }

  }

  for (let i = 0; i < pawnInfo[0]; i++) {
    chess[pawnInfo[i*2 + 1]-1][pawnInfo[i*2 + 2]-1] = 1;
  }

  for (let i = 0; i < queenInfo[0]; i++) {
    let currentX = queenInfo[i*2 + 1]-1;
    let currentY = queenInfo[i*2 + 2]-1;
    chess[currentX][currentY] = 1;
  
    // 왼쪽 가로로 이동
    for (let j = currentY - 1; j >= 0; j--) {
      if (chess[currentX][j] !== 1) {
        chess[currentX][j] = 2;
      } else {
        break;
      }
    }

    // 오른쪽 가로로 이동
    for (let j = currentY + 1; j < m; j++) {
      if (chess[currentX][j] !== 1) {
        chess[currentX][j] = 2;
      } else {
        break;
      }
    }

    // 위쪽 세로로 이동
    for (let j = currentX - 1; j >= 0; j--) {
      if (chess[j][currentY] !== 1) {
        chess[j][currentY] = 2;
      } else {
        break;
      }
    }
    
    // 아래쪽 세로로 이동
    for (let j = currentX + 1; j < n; j++) {
      if (chess[j][currentY] !== 1) {
        chess[j][currentY] = 2;
      } else {
        break;
      }
    }

    // 대각선 오른쪽 위쪽으로 이동
    let count = 1;
    while(true) {
      let newX = currentX - count;
      let newY = currentY + count;

      if ((newX >= 0 && newX < n) && (newY >= 0 && newY < m)) {
        if (chess[newX][newY] !== 1) {
          chess[newX][newY] = 2;
        } else {
          break;
        }
      } else {
        break;
      }

      count += 1;
    }

    // 대각선 왼쪽 위쪽으로 이동
    count = 1;
    while(true) {
      let newX = currentX - count;
      let newY = currentY - count;

      if ((newX >= 0 && newX < n) && (newY >= 0 && newY < m)) {
        if (chess[newX][newY] !== 1) {
          chess[newX][newY] = 2;
        } else {
          break;
        }
      } else {
        break;
      }

      count += 1;
    }

    // 대각선 오른쪽 아래쪽으로 이동
    count = 1;
    while(true) {
      let newX = currentX + count;
      let newY = currentY + count;

      if ((newX >= 0 && newX < n) && (newY >= 0 && newY < m)) {
        if (chess[newX][newY] !== 1) {
          chess[newX][newY] = 2;
        } else {
          break;
        }
      } else {
        break;
      }

      count += 1;
    }

    // 대각선 왼쪽 아래쪽으로 이동
    count = 1;
    while(true) {
      let newX = currentX + count;
      let newY = currentY - count;

      if ((newX >= 0 && newX < n) && (newY >= 0 && newY < m)) {
        if (chess[newX][newY] !== 1) {
          chess[newX][newY] = 2;
        } else {
          break;
        }
      } else {
        break;
      }

      count += 1;
    }
  }
  
  for (let i = 0; i < n; i++) {
    answer += chess[i].filter(num => num === 0).length;
  }
  
  console.log(answer);
}

solution();
