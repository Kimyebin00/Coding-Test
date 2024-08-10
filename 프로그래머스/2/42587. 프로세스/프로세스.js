function solution(priorities, location) {
    var answer = 0;
    
    const process = [];
    const queue = [];
    
    for (let i = 0; i < priorities.length; i++) {
        process.push("index"+i);
    }
    
    const wantedProcess = process[location];
    
    while (process.length !== 0) {
        let ranking = priorities.shift();
        let name = process.shift();
        
        if (priorities.filter(rank => rank > ranking).length !== 0) {
            priorities.push(ranking);
            process.push(name);
        } else {
            queue.push(name);
        }
    }
    
    answer = queue.indexOf(wantedProcess) + 1;
    
    return answer;
}