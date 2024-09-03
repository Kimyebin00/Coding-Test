function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = 0;

  const [r, c, k] = input[0].split(" ").map(Number);

  const map = [];

  for (let i = 1; i <= r; i++) {
    map.push(input[i].split(""));
  }

  const direction = [[-1,0], [1,0], [0,-1], [0,1]];
  const distanceArr = [];

  const visited = Array.from({length: r}, () => Array(c).fill(false));

  const dfs = (currentX, currentY, currentMap, distance) => {
    currentMap = currentMap.map(x => [...x]);

    if (currentX === 0 && currentY === c-1) {
      distanceArr.push(distance);
    }
    for (const [x, y] of direction) {
      let newX = currentX + x;
      let newY = currentY + y;
      
      if (newX >= 0 && newX < r && newY >= 0 && newY < c) {
        if (currentMap[newX][newY] !== "T" && visited[newX][newY] === false) {
          visited[newX][newY] = true;

          dfs(newX, newY, currentMap, distance + 1);
          visited[newX][newY] = false;

        }
      }
    }
  }
  
  visited[r-1][0] = true;
  dfs(r-1, 0, map, 1);

  answer = distanceArr.filter(distance => distance === k).length;

  console.log(answer);
}

solution();
