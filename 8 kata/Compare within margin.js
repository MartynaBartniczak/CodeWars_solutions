function closeCompare(a, b, margin){
    return Math.abs(a-b) <= margin || a-b === 0 ? 0 : a < b ? -1 : 1;a-b < margin || a-b ===0? 0: a < b? -1 :1 ;
}