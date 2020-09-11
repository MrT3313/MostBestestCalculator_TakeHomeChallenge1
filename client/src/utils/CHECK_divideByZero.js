export const CHECK_divideByZero = (equationString, item) => {
/*
    Will return TRUE if user is trying to divide by zero
*/
    if (
        equationString.charAt(equationString.length - 1) === '/' &&
        item === 0
    ) {
        return true
    } else {
        return false
    }
}
