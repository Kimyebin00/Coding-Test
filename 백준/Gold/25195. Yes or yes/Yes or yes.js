function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  let answer = "Yes ";

  const [n, m] = input[0].split(" ").map(Number);

  const graph = Array.from({length: n+1}, () => []);

  for (let i = 1; i <= m; i++) {
    const [u, v] = input[i].split(" ").map(Number);

    graph[u].push(v);
  }
  
  const fanClubCnt = +input[m+1];
  const fanClubPoints = input[m+2].split(" ").map(Number);

  const visited = Array.from({length: n+1}, () => 0);

  const dfs = (currentNode, meetingCnt) => {
    if (meetingCnt) return;
    if (answer === "yes ") return;

    if (!graph[currentNode].length) {
      if (!meetingCnt) answer = "yes ";
      return;
    }

    for (const nextNode of graph[currentNode]) {
      if (answer === "yes ") break;
      if (!visited[nextNode]) {
        visited[nextNode] = 1;

        if (fanClubPoints.includes(nextNode)) dfs(nextNode, meetingCnt + 1);
        else dfs(nextNode, meetingCnt);

        visited[nextNode] = 0;
      }
    }
  }

  if (fanClubPoints.includes(1)) dfs(1, 1);
  else dfs(1, 0);

  console.log(answer);
}
solution();