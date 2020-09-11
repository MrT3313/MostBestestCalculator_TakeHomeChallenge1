/* eslint no-eval: 0 */

// IMPORTS
import React from 'react'

// COMPONENTS
import Button from './Button.js'
import ActionButton from './ActionButton.js'

// FUNCTIONS
import { CHECK_divideByZero } from '../utils/CHECK_divideByZero.js'
import { CHECK_firstEntry } from '../utils/CHECK_firstEntry.js'
import { CHECK_secondPlusEntry } from '../utils/CHECK_secondPlusEntry.js'

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
    const onClick = (item) => {
        // Variables
        const operations = ['*','-','/','+']

        // Edge Case
        if(
            CHECK_divideByZero(history, item)
        ) {
            setHistory(history.slice(0, -1))
            alert('Unable to divide by 0')
            return
        }

        // Entry #1
        if(
            CHECK_firstEntry(item, history, result, operations)
        ) { 
            setHistory(`${item}`)
            return
        } 
        
        // Entry #2+
        if (
            history !== ``
        ) { 
            if (
                CHECK_secondPlusEntry(item, history, operations)
            ) {
                setHistory(`${history}${item}`)
                return
            } else {
                return
            }
        } 
        
        // Extend Result 
        if (
            history === `` && result
        ) { 
            if (
                !operations.includes(history.charAt(history.length - 1)) &&
                !operations.includes(item)
            ) { // Back to back operations entered
                return
            } else {
                setHistory(`${result}${item}`)
            }
            return
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