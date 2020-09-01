// IMPORTS
import React, {useState} from 'react'

// COMPONENTS
import ResultScreen from './ResultScreen.js'
import ButtonContainer from './ButtonContainer.js'

// STYLES
import '../styles/Calculator.css'

// __MAIN__
function Calculator() {
    // State
    const [result, setResult] = useState()
    const [history, setHistory] = useState('')
    // Return
    return (
        <div className="Calculator">
            <ResultScreen 
                result={result}
                history={history}
            />
            <ButtonContainer 
                history={history}
                setHistory={setHistory}
            />
        </div>
    )
}

// EXPORT
export default Calculator