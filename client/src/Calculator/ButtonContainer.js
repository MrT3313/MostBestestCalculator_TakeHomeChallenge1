/* eslint no-eval: 0 */

// IMPORTS
import React from 'react'

// COMPONENTS
import Button from './Button.js'
import ActionButton from './ActionButton.js'

// FUNCTIONS
// import { CHECK_divideByZero } from '../utils/CHECK_divideByZero.js'
// import { CHECK_firstEntry } from '../utils/CHECK_firstEntry.js'
// import { CHECK_secondPlusEntry } from '../utils/CHECK_secondPlusEntry.js'
import { updateHistory } from '../utils/updateHistory.js'

// ICONS
import divide from '../assets/mathSymbols/divide.svg'
import multiply from '../assets/mathSymbols/multiply.svg'
import plus from '../assets/mathSymbols/plus.svg'
import minus from '../assets/mathSymbols/minus.svg'
import equal from '../assets/mathSymbols/equal.svg'

// STYLES
import '../styles/ButtonContainer.css'

// __MAIN__
function ButtonContainer(
    {   history, setHistory, 
        result, setResult   
    }
) {
    // Methods
    // - 1 - //
    const clear = () => {
        setResult(false)
        setHistory(``)
    }

    // - 2 - //
    const onClick = item => {
        const updatedString = updateHistory(item, history, result)
        if (updatedString) {
            setHistory(updatedString)
        }
    }

    // - 3 - //
    const calculate = (hist) => {
        // Calculate & Set Result
        const result = eval(hist)
        setResult(result)

        // Clear History
        setHistory(``)
    }

    // Return
    return (
        <div 
            className='ButtonContainer'
            data-testid='ButtonContainer'
        >
            <ActionButton operation={['clear', 'C', ]} onClick={clear}/>
            <ActionButton operation={['divide', '/', divide]} onClick={onClick}/>

            <Button num={7} onClick={onClick}/>
            <Button num={8} onClick={onClick}/>
            <Button num={9} onClick={onClick}/>
            <ActionButton operation={['multiply', '*', multiply]} onClick={onClick}/>

            <Button num={4} onClick={onClick}/>
            <Button num={5} onClick={onClick}/>
            <Button num={6} onClick={onClick}/>
            <ActionButton operation={['subtract', '-', minus]} onClick={onClick}/>

            <Button num={1} onClick={onClick}/>
            <Button num={2} onClick={onClick}/>
            <Button num={3} onClick={onClick}/>
            <ActionButton operation={['add', '+', plus]} onClick={onClick}/>

            <Button num={0} onClick={onClick}/>
            <ActionButton operation={['equals', '=', equal]} onClick={() => calculate(history)}/>
        </div>
    )
}

// EXPORT
export default ButtonContainer