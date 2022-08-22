function matchSticks(step) {
    if (step === 0) {
        return 0
    }
    return 5 * step + 1
}

console.log(matchSticks(3))