// IMPORTS
import React from 'react'

// STYLES
import '../styles/button.css'

// __MAIN__
function ActionButton({operation, onClick}) {
    // operation prop: [symbol, svg]
    return (
        <button 
            className={
                operation[0] === 'C' ? 'Button clear' : 
                operation[0] === '=' ? 'Button equals' :
                    'Button'
            }
            onClick={() => onClick(operation[0])}
        >
            {operation.length === 2 ? <img src={operation[1]} height='15px' fill='white'/> : operation[0]}
        </button> 
    )
}

// EXPORT
export default ActionButton