// IMPORTS
import React from 'react'

// COMPONENTS
import History from './History.js'

// STYLES
import '../styles/ResultScreen.css'

// __MAIN__
function ResultScreen({result, history}) {
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