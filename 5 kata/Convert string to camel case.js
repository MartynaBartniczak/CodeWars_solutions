function toCamelCase(str){
    var strReplaced = str.replace(/[_-]/ig, " ").split(" ")
            .map(str => str.charAt(0).toUpperCase() + str.slice(1)).join('')

    var checkFirstLetter = str[0] === strReplaced[0] ? strReplaced :
        strReplaced.split(" ").map(str => str.charAt(0).toLowerCase() + str.slice(1)).join('')

    return checkFirstLetter
}
