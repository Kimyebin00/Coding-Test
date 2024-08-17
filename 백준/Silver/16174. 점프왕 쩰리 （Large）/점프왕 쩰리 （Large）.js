function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = "";

  const direction = [[1,0],[0,1]];

  const n = +(input[0]);

  const graph = [];

  for (let i = 1; i <= n; i++) {
    graph.push(input[i].split(" "));
  }

  const dfs = (currentX, currentY) => {
    let distance = +(graph[currentX][currentY]);

    graph[currentX][currentY] = 0;
    
    if (distance === -1) {
      answer = "HaruHaru";
      return;
    }

    if (distance !== 0) {
      for (const [x, y] of direction) {
        let newX = currentX + x * distance;
        let newY = currentY + y * distance;

        if (newX >= 0 && newX < n && newY >= 0 && newY < n) {
          dfs(newX, newY);
        }
      } 
    }
    
  }

  dfs(0 ,0);

  if (answer === "") answer = "Hing";

  console.log(answer);
}

solution();
