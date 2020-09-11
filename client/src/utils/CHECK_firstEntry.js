export const CHECK_firstEntry = (item, history, result, operations) => {
    if (
        history === `` && 
        !result && 
        !operations.includes(item)
    ) {
        return true
    } else {
        return false
    }
}