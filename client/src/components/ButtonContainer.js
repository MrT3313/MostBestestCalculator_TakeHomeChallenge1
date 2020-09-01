// IMPORTS
import React from 'react'

// COMPONENTS
import Button from './Button.js'
import ActionButton from './ActionButton.js'

// STYLES
import '../styles/ButtonContainer.css'

// __MAIN__
function ButtonContainer({history, setHistory}) {
    // Methods
    const click = (item) => {
        console.log(`Button ${item} Button Clicked`)
        setHistory(`${history}${item}`)
    }
    const clear = () => {
        setHistory(``)
    }
    const calculate = (hist) => {
        console.log(`We need to calculate ${hist}`)

        // Calculate

        // Clear History
        setHistory(``)
        // Show Result
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