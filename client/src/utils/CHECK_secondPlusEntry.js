export const CHECK_secondPlusEntry = (item, history, operations) => {
/* 
    Will return FALSE if user enters back to back operations
*/
    if (history === '') { return true }
    if (
        (
            operations.includes(history.charAt(history.length - 1)) &&
            operations.includes(item)
        )
    ) {
        return false
    } else {
        return true
    }
}