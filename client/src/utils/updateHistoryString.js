// IMPORTS
import { CHECK_divideByZero } from './CHECK_divideByZero.js'
import { CHECK_backToBackOperators } from './CHECK_backToBackOperators.js'

// __MAIN__
export const updateHistoryString = (
    item,
    history, 
    result,
) => {
/* 
    Edge Cases:
        1. Back-to-Back Operators
        2. Divide by Zero

    Cases: 
        1. First Entry
            history === ''
            result === false
            !operations.includes(item)
        2. Second+ Entry
            history !== ''
            result !== false || result === false
        3. Extend Result
            history === ''
            result !== false

    Return:
        new (non mutated) history string || false
*/

    // Variables
    const operations = ['*','-','/','+']

    // Edge Cases
    if (CHECK_backToBackOperators(item, history, operations)) {
        return false
    }
    if (CHECK_divideByZero(history, item)) {
        alert('Unable to divide by 0')
        return `${history.slice(0, -1)}`
    }

    // - 1 - // First Entry
    if (
        history === '' &&
        result === false &&
        !operations.includes(item)
    ) {
        return `${item}`
    }

    // - 2 - // Second+ Entry
    if(
        history !== ''
    ) {
        return `${history}${item}`
    }

    // - 3 - // Extend Result
    if (
        history === '' &&
        result !== false &&
        operations.includes(item)
    ) {
        return `${result}${item}`
    }

    // - 4 - // Default Return
    // User trying to extend result w/o operator as next click
    return false
}