function arrayMadness(a, b) {
    const s1 = a.reduce((s, n) => s + n * n, 0)
    const s2 = b.reduce((s, n) => s + n * n * n, 0)
    return s1 > s2
}