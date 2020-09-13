export const CHECK_backToBackOperators = (item, history, operations) => {
/* 
<<<<<<< HEAD
    Will return TRUE if user enters back to back operations
=======
    Will return FALSE if user enters back to back operations
>>>>>>> cf098e60d0a63d03ccac3e09274891b759fd0763
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