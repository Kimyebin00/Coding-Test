function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const n = +input[0];
  
  
  const mainWord = input[1];
  const mainLen = mainWord.length;

  let answer = 0;

  for (let i = 2; i <= n; i++) {
    const word = input[i].split("");

    if (word.length < mainLen - 1 || word.length > mainLen + 1) continue;

    for (let j = 0; j < mainLen; j++) {
      if (word.includes(mainWord[j])) {
        word[word.indexOf(mainWord[j])] = "";
      }
    }

    if (word.length === mainLen) {
      if (word.filter(a => a !== "").length <= 1) answer++;
    } else if (word.length === mainLen - 1) {
      if (word.filter(a => a !== "").length === 0) answer++;
    } else if (word.length === mainLen + 1) {
      if (word.filter(a => a !== "").length === 1) answer++;
    } 
  }

  console.log(answer);
}

solution();