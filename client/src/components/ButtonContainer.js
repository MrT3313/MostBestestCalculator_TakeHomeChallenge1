// IMPORTS
import React from 'react'

// COMPONENTS
import Button from './Button.js'
import ActionButton from './ActionButton.js'

// STYLES
import '../styles/ButtonContainer.css'

// __MAIN__
function ButtonContainer() {
    return (
        <div className='ButtonContainer'>
            <ActionButton type='clear'/>
            <ActionButton type='divide'/>

            <Button num={7}/>
            <Button num={8}/>
            <Button num={9}/>
            <ActionButton type={'multiply'}/>

            <Button num={4}/>
            <Button num={5}/>
            <Button num={6}/>
            <ActionButton type={'subtract'}/>

            <Button num={1}/>
            <Button num={2}/>
            <Button num={3}/>
            <ActionButton type={'add'}/>

            <Button num={0}/>
            <ActionButton type={'equals'}/>
        </div>
    )
}

// EXPORT
export default ButtonContainer