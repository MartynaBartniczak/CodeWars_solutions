function reverseWords(str) {
    var result = str.split(' ').map(x=>x.split('').reverse().join(''))
    return result.join(' ')
}