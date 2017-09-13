const mappings ={
    'ą':'a',
    'ć':'c',
    'ę':'e',
    'ł':'l',
    'ń':'n',
    'ó':'o',
    'ś':'s',
    'ż':'z',
    'ź':'z'
}
const correctPolishLetters = string =>
string.split('').map(
    char => mappings[char] || char
).join('')