function odds(values){
    // arrow it
    return values.filter( value => {if(value % 2 ===1) return value} );
}
// let adults = family.filter(person => { if (person.age > 18) return person} );