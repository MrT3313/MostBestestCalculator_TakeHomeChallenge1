export const divideByZero = (equationString, item) => {
/*
    Will return FALSE if user is trying to divide by zero
*/
    if (
        equationString.charAt(equationString.length - 1) === '/' &&
        item === 0
    ) {
        return false
    } else {
        return true
    }
}
