function solution(input, markers){
    let firstSplit = input.split('\n')
    let pattern = new RegExp('['+ markers.join('') + ']' + '.*', 'ig' )
    let answer = firstSplit.map(x => x.replace(pattern, "").trim()).join('\n')
    return answer
}