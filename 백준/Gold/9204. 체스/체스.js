function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const t = +input[0];

  const dir = [[-1, -1], [-1, 1], [1, 1], [1, -1]];

  for (let i = 1; i <= t; i++) {
    const [x1, y1, x2, y2] = input[i].split(" ").map(point => {
      if (isNaN(+point)) return point.charCodeAt() - 64;
      else return +point;
    });

    let isPossible = false;

    const visited = Array.from({length: 9}, () => Array.from({length: 9}, () => 0));
    const nodes = [[x1, y1, 0, [String.fromCharCode(x1 + 64), y1]]];

    while (nodes.length) {
      const [curX, curY, cnt, arr] = nodes.shift();

      if (curX === x2 && curY === y2) {
        console.log(cnt + " " + arr.join(" "));
        isPossible = true;
        break;
      }

      if (cnt === 4) continue;

      if (!visited[curX][curY]) {
        visited[curX][curY] = 1;

        for (const [x, y] of dir) {
          let idx = 1;

          while (true) {
            if (curX + idx * x < 1 || curX + idx * x > 8 || curY + idx * y < 1 || curY + idx * y > 8) {
              break;
            } else {
              nodes.push([curX + idx * x, curY + idx * y, cnt + 1, [...arr, String.fromCharCode(curX + idx * x + 64), curY + idx * y]]);
              idx++;
            }
          }
        }
      }
    }

    if (!isPossible) console.log("Impossible");
  }
}

solution();