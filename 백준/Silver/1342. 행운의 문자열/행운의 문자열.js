function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const s = input[0].split("");

  const alphabets = Array.from({length: 26}, () => 0);

  s.forEach(alphabet => alphabets[alphabet.charCodeAt() - 'a'.charCodeAt()] += 1);

  let answer = 0;

  const dfs = (index, pre) => {
    if (index === s.length) {
      answer++;
      return;
    }

    for (let i = 0; i < 26; i++) {
      if (!alphabets[i]) continue;

      if (pre !== i) {
        alphabets[i]--;
        dfs(index + 1, i);
        alphabets[i]++;
      }
    }
  }

  dfs(0, -1);

  console.log(answer);
}

solution();