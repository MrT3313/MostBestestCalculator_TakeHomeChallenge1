// IMPORTS
import React from 'react'

// STYLES

// __MAIN__
function Button({num, onClick}) {
    return (
        <button 
            className={num === 0  ? 'Button zero' : 'Button'}
            onClick={() => onClick(num)}
        >
            {num}
        </button>
    )
}

// EXPORT
export default Button