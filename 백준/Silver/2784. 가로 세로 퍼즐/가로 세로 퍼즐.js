function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const words = [];

  for (let i = 0; i < 6; i++) {
    words.push(input[i]);
  }

  const possible = [];

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      if (i === j) continue;

      for (let k = 0; k < 6; k++) {
        if (k === i || k === j) continue;

        const strArr = [words[i], words[j], words[k]];

        const checkResult = checkAllWords(words, strArr);
    
        if (checkResult) possible.push(strArr.join(""));
      }
    }
  }

  if (possible.length) {
    possible.sort();

    console.log(possible[0].slice(0, 3));
    console.log(possible[0].slice(3, 6));
    console.log(possible[0].slice(6, 9));
  } else {
    console.log(0);
  }
}

function checkAllWords(words, strArr) {
  const word1 = strArr[0][0] + strArr[0][1] + strArr[0][2];
  const word2 = strArr[1][0] + strArr[1][1] + strArr[1][2];
  const word3 = strArr[2][0] + strArr[2][1] + strArr[2][2];
  const word4 = strArr[0][0] + strArr[1][0] + strArr[2][0];
  const word5 = strArr[0][1] + strArr[1][1] + strArr[2][1];
  const word6 = strArr[0][2] + strArr[1][2] + strArr[2][2];

  const visited = Array(6).fill(0);

  const willCheckWord = [word1, word2, word3, word4, word5, word6];
  
  for (const word of willCheckWord) {
    for (let i = 0; i < 6; i++) {
      if (!visited[i] && words[i] === word) {
        visited[i] = 1;
        break;
      }
    }
  }

  if (visited.filter(node => node === 0).length === 0) return true;
  else return false;
}

solution();