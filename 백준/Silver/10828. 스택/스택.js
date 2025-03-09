function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const n = +input[0];
  const stack = [];

  const answer = [];

  for (let i = 1; i <= n; i++) {
    const [command, num] = input[i].split(" ");

    switch (command) {
      case 'push':
        stack.push(num);
        break;
      case 'pop':
        if (stack.length === 0) answer.push(-1);
        else answer.push(stack.pop());  
        break;
      case 'size':
        answer.push(stack.length);
        break;
      case 'empty':
        if (stack.length === 0) answer.push(1);
        else answer.push(0);  
        break;
      case 'top':
        if (stack.length === 0) answer.push(-1);
        else answer.push(stack[stack.length-1]);  
        break;
    }
  }

  console.log(answer.join("\n"));
}

solution();