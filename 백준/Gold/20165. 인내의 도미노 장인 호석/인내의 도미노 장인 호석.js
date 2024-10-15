function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const [n, m, r] = input[0].split(" ").map(Number);
  
  const gameBoard = [];
  const answer = [];

  for (let i = 1; i <= n; i++) {
    gameBoard.push(input[i].split(" ").map(Number));
    answer.push(Array.from({length: m}, () => 'S'));
  }

  let index = n + 1;
  let attackScore = 0
  for (let i = 0; i < r; i++) {
    let [attackX, attackY, direction] = input[index++].split(" ");
    attackX = +attackX - 1;
    attackY = +attackY - 1;
    const [defenseX, defenseY] = input[index++].split(" ").map(num => +num - 1);

    let attackCount = gameBoard[attackX][attackY];
    
    while (attackCount > 0) {
      if (answer[attackX][attackY] === 'S') {
        attackScore++;
        attackCount = Math.max(attackCount, gameBoard[attackX][attackY]);
      }
      
      answer[attackX][attackY] = 'F';
      attackCount--;

      if (direction === 'N') {
        attackX--;
      } else if (direction === 'S') {
        attackX++;
      } else if (direction === 'W') {
        attackY--;
      } else {
        attackY++;
      }

      if (attackX < 0 || attackX >= n || attackY < 0 || attackY >= m) break;
    }
  
    if (answer[defenseX][defenseY] === 'F') answer[defenseX][defenseY] = 'S';
  }

  console.log(attackScore);
  for (let i = 0; i < n; i++) {
    console.log(answer[i].join(' '));
  }
}

solution();