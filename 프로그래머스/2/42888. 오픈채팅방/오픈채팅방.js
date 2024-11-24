function solution(record) {
    const user = new Map();
    
    let answer = [];
    
    for (const info of record) {
        const [act, id, name] = info.split(" ");
        if (act === "Enter") {
            user.set(id, name);
            answer.push([act, id]);
        } else if (act === "Leave") {
            answer.push([act, id]);
        } else {
            user.set(id, name);
        }
    }
    
    answer = answer.map(info => {
        if (info[0] === "Enter") return info = `${user.get(info[1])}님이 들어왔습니다.`;
        else return info = `${user.get(info[1])}님이 나갔습니다.`;
    });
    
    return answer;
}