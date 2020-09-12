export const CHECK_backToBackOperators = (item, history, operations) => {
/* 
    Will return FALSE if user enters back to back operations
*/
    if (
        operations.includes(history.charAt(history.length - 1)) &&
        operations.includes(item)
    ) {
        return true
    } else {
        return false
    }
}