function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answerCount = 0;
  let answerSizes = [];

  const direction = [[-1,0],[1,0],[0,-1],[0,1]];

  const [M, N, K] = input[0].split(" ").map(Number);

  //const graph = Array(M).fill(Array(N).fill(false));

  const graph = [];

  for (let i = 0; i < M; i++) {
    graph.push(Array(N).fill(false));
  }

  for (let i = 1; i <= K; i++) {
    let [leftDownY, leftDownX, rightUpY, rightUpX] = input[i].split(" ").map(Number);

    
    for (let j = leftDownX; j < rightUpX; j++) {
      for (let k = leftDownY; k < rightUpY; k++) {
        graph[j][k] = true;
      }
    }
  }
  
  let count = 1;
  const dfs = (startNodeX, startNodeY, ) => {
    for (const [x, y] of direction) {
      let newX = startNodeX + x;
      let newY = startNodeY + y;

      if (newX >= 0 && newX < M && newY >= 0 && newY < N) {
        if (!graph[newX][newY]) {
          graph[newX][newY] = true;
          count++;
          dfs(newX, newY);
        }
      }
    }
  }

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (!graph[i][j]) {
        graph[i][j] = true;
        dfs(i, j);
        answerSizes.push(count);
        count = 1;
        answerCount++;
      }
    }
  }
 
  answerSizes.sort((a,b) => a-b);
 

  console.log(answerCount);
  console.log(answerSizes.join(" "));
}

solution();
