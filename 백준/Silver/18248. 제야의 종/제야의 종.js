function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  let answer = "YES";
  
  const [n, m] = input[0].split(" ").map(Number);

  if (n === 1 || m === 1) return console.log(answer);

  let people = [];

  for (let i = 1; i <= n; i++) {
    people.push(input[i]);
  }

  people.sort().reverse();

  people = people.map(person => person.split(" ").map(Number));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n-1; j++) {
      if (people[j][i] < people[j+1][i]) {
        answer = "NO";
        break;        
      }
    }

    if (answer === "NO") break;
  }
  
  console.log(answer);
}

solution();