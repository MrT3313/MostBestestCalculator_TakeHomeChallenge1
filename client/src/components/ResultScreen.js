// IMPORTS
import React, {useState, useEffect} from 'react'

// COMPONENTS
import History from './History.js'

// STYLES
import '../styles/ResultScreen.css'

// __MAIN__
function ResultScreen({result, history}) {
    // State
    // const [value, setValue] = useState(0)
    // UseEffect
    // useEffect(() => {
    //     if (result) {
    //         setValue(result)
    //     }
    // }, result)
    // RETURN
    return (
        <div className='ResultScreen'>
            <History history={history}/>
            <div>
                {result ? result : 0}
            </div>
        </div>
    )
}

// EXPORT
export default ResultScreen