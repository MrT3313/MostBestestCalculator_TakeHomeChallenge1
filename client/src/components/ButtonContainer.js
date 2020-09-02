// IMPORTS
import React from 'react'

// COMPONENTS
import Button from './Button.js'
import ActionButton from './ActionButton.js'

// STYLES
import '../styles/ButtonContainer.css'

// __MAIN__
function ButtonContainer(
    {   history, setHistory, 
        result, setResult   
    }
) {
    // Methods
    const click = (item) => {
        // Variables
        const operations = ['*','-','/','+']

        // Edge Case(s)
        if (
            operations.includes(history.charAt(history.length - 1)) &&
            operations.includes(item)
        ) {
            return
        }
        if (
            history.charAt(history.length - 1) === '/' &&
            item === 0
        ) {
            alert('Unable to divide by 0')
            return
        }
        // Main Logic
        if (
            history === `` && !result && !operations.includes(item)
        ) { // Entry #1
            setHistory(`${item}`)
        } else if (
            history !== ``
        ) { // Entry #2+
            setHistory(`${history}${item}`)
        } else if (
            history === `` && result
        ) { // Extend Result 
            if (
                !operations.includes(history.charAt(history.length - 1)) &&
                !operations.includes(item)
            ) { // Back to back operations entered
                return
            } else {
                setHistory(`${result}${item}`)
            }
        }
    }
    const clear = () => {
        setResult()
        setHistory(``)
    }
    const calculate = (hist) => {
        // Calculate
        const result = eval(hist)
        setResult(result)

        // Clear History
        setHistory(``)
    }

    // Return
    return (
        <div className='ButtonContainer'>
            <ActionButton type='clear' click={clear}/>
            <ActionButton type='divide' click={click}/>

            <Button num={7} click={click}/>
            <Button num={8} click={click}/>
            <Button num={9} click={click}/>
            <ActionButton type={'multiply'} click={click}/>

            <Button num={4} click={click}/>
            <Button num={5} click={click}/>
            <Button num={6} click={click}/>
            <ActionButton type={'subtract'} click={click}/>

            <Button num={1} click={click}/>
            <Button num={2} click={click}/>
            <Button num={3} click={click}/>
            <ActionButton type={'add'} click={click}/>

            <Button num={0} click={click}/>
            <ActionButton type={'equals'} click={() => calculate(history)}/>
        </div>
    )
}

// EXPORT
export default ButtonContainer