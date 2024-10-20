function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
 
  const [n, m] = input[0].split(" ").map(Number);

  const chessBoard = [];

  for (let i = 1; i <= n; i++) {
    chessBoard.push(input[i].split(""));
  }

  const counts = [];

  for (let i = 0; i <= n-8; i++) {
    for (let j = 0; j <= m-8; j++) {
      let count = 0;
      let index = 0;

      // 시작 W
      for (let r = i; r < i + 8; r++) {
        const row = chessBoard[r].slice(j, j+8);
        
        if (index % 2) {
          for (let rowIdx = 0; rowIdx < 8; rowIdx++) {
            if (rowIdx % 2) {
              if (row[rowIdx] !== 'B') count++;
            } else {
              if (row[rowIdx] !== 'W') count++;
            }
          }
        } else {
          for (let rowIdx = 0; rowIdx < 8; rowIdx++) {
            if (rowIdx % 2) {
              if (row[rowIdx] !== 'W') count++;
            } else {
              if (row[rowIdx] !== 'B') count++;
            }
          }
        }

        index++;
      }

      counts.push(count);

      count = 0;
      index = 0;

      // 시작 B
      for (let r = i; r < i + 8; r++) {
        const row = chessBoard[r].slice(j, j+8);
        
        if (index % 2) {
          for (let rowIdx = 0; rowIdx < 8; rowIdx++) {
            if (rowIdx % 2) {
              if (row[rowIdx] !== 'W') count++;
            } else {
              if (row[rowIdx] !== 'B') count++;
            }
          }
        } else {
          for (let rowIdx = 0; rowIdx < 8; rowIdx++) {
            if (rowIdx % 2) {
              if (row[rowIdx] !== 'B') count++;
            } else {
              if (row[rowIdx] !== 'W') count++;
            }
          }
        }

        index++;
      }
      
      counts.push(count);
    }
  }

  console.log(Math.min(...counts));
}

solution();