function once(fn) {
    let done = false
    return function (...args) {
        if (!done) {
            done = true;
            return fn(...args)
        }
    }
}