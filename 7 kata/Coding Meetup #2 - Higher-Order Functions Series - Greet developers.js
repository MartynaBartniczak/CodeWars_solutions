function greetDevelopers(list) {
    return list.map(obj => {
        obj.greeting = "Hi " + obj.firstName +
        ", what do you like the most about " +
        obj.language + "?"
    return obj;
})
}