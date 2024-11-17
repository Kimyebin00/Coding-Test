function solution(x, y, n) {
    let answer = -1;
    
    const nodes = [[y, 0]];
    
    const visited = Array.from({length: 1000001}, () => 0);
    visited[y] = 1;
    
    while (nodes.length) {
        const [num, cnt] = nodes.shift();
        
        if (num === x) {
            answer = cnt;
            break;
        }
        
        if (num - n >= x && !visited[num - n]) {
            visited[num - n] = 1;
            nodes.push([num - n, cnt + 1]);
        }
        if (num % 2 === 0 && num / 2 >= x && !visited[num / 2]) {
            visited[num / 2] = 1;
            nodes.push([num / 2, cnt + 1]);
        }
        if (num % 3 === 0 && num / 3 >= x && !visited[num / 3]) {
            visited[num / 3] = 1;
            nodes.push([num / 3, cnt + 1]);
        }
        
    }
    
    return answer;
}