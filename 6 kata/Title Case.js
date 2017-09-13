function titleCase(title, minorWords) {
    if (!title) {
        return ''
    }

    var minorWordsArr = minorWords ? minorWords.toLowerCase().split(' ') : []

    return title.toLowerCase().split(' ').map((word, index) => {
            if (minorWordsArr.indexOf(word) > -1 && index > 0) {
        return word.toLowerCase()
    }
    return word[0].toUpperCase() + word.substring(1, word.length)
}).join(' ')
}