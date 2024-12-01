function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const n = +input[0];

  const words = [];

  for (let i = 1; i <= n; i++) {
    words.push(input[i]);
  }
  
  words.sort((a,b) => a.length - b.length);

  const answer = [];

  let currentLen = words[0].length;
  let currentWords = [];

  for (const word of words) {
    if (currentWords.includes(word)) continue;

    if (word.length === currentLen) {
      currentWords.push(word);
    } else {
      currentWords.sort();
      answer.push(...currentWords);
      currentLen = word.length;
      currentWords = [word];
    }
  }
    
  currentWords.sort();

  if (currentWords.length) answer.push(...currentWords);

  console.log(answer.join("\n"));
}

solution();