function solution(word) {
    var answer = 0;
    
    const alphabets = ['A', 'E', 'I', 'O', 'U'];
    
    let cnt = 0;
    const dfs = (str) => {
        if (str === word) {
            answer = cnt;
            return;
        }
        if (str.length < 5) {
            for (const a of alphabets) {
                cnt++;
                dfs(str+a);
            }
        }
    }
    
    dfs("", 0);
    return answer;
}