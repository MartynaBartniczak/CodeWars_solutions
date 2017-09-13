const mirror = obj => {
    return Object.keys(obj).reduce((newObj,key) => {
        newObj[key] = key.toString().split('').reverse().join('')
        return newObj
    },{})

};