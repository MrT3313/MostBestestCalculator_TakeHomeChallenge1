// IMPORTS
import { CHECK_divideByZero } from '../utils/CHECK_divideByZero.js'
import { CHECK_backToBackOperators } from '../utils/CHECK_backToBackOperators.js'

// __MAIN__
export const updateHistory = (
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
            retuls !== false
*/

    // Variables
    const operations = ['*','-','/','+']

    // Edge Cases
    console.log(CHECK_backToBackOperators(item, history, operations))
    if (CHECK_backToBackOperators(item, history, operations)) {
        return false
    }
    console.log(CHECK_divideByZero(history, item))
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
        console.log('SECOND ENTRY')
        return `${history}${item}`
    }

    // - 3 - // Extend Result
    if (
        history === '' &&
        result !== false
    ) {
        console.log('EXTEND RESULT')
        return `${result}${item}`
    }
}