// IMPORTS
import React from 'react'

// STYLES

// __MAIN__
function Button({num, onClick}) {
    return (
        <button 
            className={num === 0  ? 'NumButton zero' : 'NumButton'}
            onClick={() => onClick(num)}
        >
            {num}
        </button>
    )
}

// EXPORT
export default Button