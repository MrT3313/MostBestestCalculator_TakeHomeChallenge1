// IMPORTS
import React from 'react'

// COMPONENTS
import ResultScreen from './ResultScreen.js'
import ButtonContainer from './ButtonContainer.js'

// STYLES
import '../styles/Calculator.css'

// __MAIN__
function Calculator() {
    return (
        <div className="Calculator">
            <ResultScreen />
            <ButtonContainer />
        </div>
    )
}

// EXPORT
export default Calculator