function findSenior(list) {
    var oldest = Math.max.apply(Math,list.map(o => o.age))

    return list.filter(o => o.age === oldest)
}
