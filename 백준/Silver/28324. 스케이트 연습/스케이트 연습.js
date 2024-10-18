function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const n = +input[0];

  const maxVolumes = input[1].split(" ").map(Number);

  const volumes = Array.from({length: n}, () => 0);

  volumes[n-1] = 1;

  let answer = 1;

  for (let i = n - 2; i >= 0; i--) {
    if (maxVolumes[i] > volumes[i+1]) {
      volumes[i] = volumes[i+1] + 1;
    } else if (maxVolumes[i] === volumes[i+1]) {
      volumes[i] = volumes[i+1];
    } else {
      volumes[i] = maxVolumes[i];
    }

    answer += volumes[i];
  }
  
  console.log(answer);
}

solution();