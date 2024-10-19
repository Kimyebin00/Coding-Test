function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
 
  let totalTime = 0;
  let totalGrade = 0;
  for (let i = 0; i < 20; i++) {
    const [name, time, grade] = input[i].split(" ");

    if (grade === 'P') continue;

    totalTime += Number(time);

    switch (grade) {
      case 'A+':
        totalGrade += Number(time) * 4.5;
        break;
      case 'A0':
        totalGrade += Number(time) * 4.0;
        break;
      case 'B+':
        totalGrade += Number(time) * 3.5;
        break;
      case 'B0':
        totalGrade += Number(time) * 3.0;
        break;
      case 'C+':
        totalGrade += Number(time) * 2.5;
        break;
      case 'C0':
        totalGrade += Number(time) * 2.0;
        break;
      case 'D+':
        totalGrade += Number(time) * 1.5;
        break;
      case 'D0':
        totalGrade += Number(time) * 1.0;
        break;
      case 'F':
        totalGrade += Number(time) * 0.0;
        break;
    }
  }

  console.log((totalGrade/totalTime).toFixed(6));
}

solution();