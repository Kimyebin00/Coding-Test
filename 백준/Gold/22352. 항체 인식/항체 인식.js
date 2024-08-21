function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = "";

  const [n, m] = input[0].split(" ").map(Number);

  const direction = [[-1,0],[1,0],[0,-1],[0,1]];
  const graph1 = [];
  const graph2 = [];

  for (let i = 1; i <= n; i++) {
    graph1.push(input[i].split(" ").map(Number));
  }

  for (let i = n+1; i <= 2*n; i++) {
    graph2.push(input[i].split(" ").map(Number));
  }

  let ok = true;
  const dfs = (currentX, currentY, currentNum, changeNum) => {
    for (const [x, y] of direction) {
      let newX = currentX + x;
      let newY = currentY + y;

      if (newX >= 0 && newX < n && newY >= 0 && newY < m) {
        if (graph1[newX][newY] === currentNum) {
          graph1[newX][newY] = changeNum;
          if (graph1[newX][newY] === graph2[newX][newY]) {
            dfs(newX, newY, currentNum, changeNum);
          } else {
            return ok = false;
          }
        }
      }
    }
  };

  let differentCount = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let num1 = graph1[i][j];
      let num2 = graph2[i][j];
      if (num1 !== num2) {
        graph1[i][j] = num2;
        dfs(i, j, num1, num2);
        differentCount++;
      }
    }
  }
  
  answer = (ok && differentCount <= 1) ? "YES" : "NO";
  
  console.log(answer);
}

solution();
