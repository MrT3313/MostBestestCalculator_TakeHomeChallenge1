// IMPORTS
import React, {useState, useEffect} from 'react'

// STYLES
import '../styles/ResultScreen.css'

// __MAIN__
function ResultScreen({result}) {
    // State
    const [value, setValue] = useState(0)
    // UseEffect
    useEffect(() => {
        if (result) {
            setValue(result)
        }
    }, result)
    // RETURN
    return (
        <div className='ResultScreen'>
            {value}
        </div>
    )
}

// EXPORT
export default ResultScreen