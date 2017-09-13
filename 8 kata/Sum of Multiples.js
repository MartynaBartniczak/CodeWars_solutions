function sumMul(n,m){
    return m<=n ? "INVALID" : Math.floor(m/n)*(Math.floor(m/n)+1)*(n/2);
}