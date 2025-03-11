function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const t = +input[0];
  const answer = [];

  let index = 1;

  for (let i = 0; i < t; i++) {
    const stack = [];
    const len = +input[index++];
    const s = input[index++];
    
    for (let j = 0; j < len; j++) {
      let count = 0;

      while (stack.length >= 3 && stack[stack.length - 3] === 'A'  && stack[stack.length - 2] === 'B'  && stack[stack.length - 1] === 'B') {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.push('B');
        count++;
      } 
      
      stack.push(...Array(count).fill('A'));
      stack.push(s.charAt(j));
    }

    let count = 0;
    
    while (stack.length >= 3 && stack[stack.length - 3] === 'A'  && stack[stack.length - 2] === 'B'  && stack[stack.length - 1] === 'B') {
      stack.pop();
      stack.pop();
      stack.pop();
      stack.push('B');
      count++;
    } 
    
    stack.push(...Array(count).fill('A'));

    answer.push(stack.join(""));
  }

  console.log(answer.join("\n"));
}

solution();